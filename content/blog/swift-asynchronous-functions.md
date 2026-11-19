In September 2021 Swift 5.5 was released, and it introduced a new native concurrency model for writing asynchronous and parallel code. This model provides a new syntax for running asynchronous operations in a structured way, as well as compiler and runtime support to improve safety and performance. If you are using Xcode 13.2 or newer, you are able to use the new concurrency language features to target iOS versions as far back as iOS 13. However, using any of the new APIs which utilize those features requires at least iOS 15 (e.g. the URLSession async/await APIs).

I recently had the opportunity to make enhancements to an iOS 13 Core Bluetooth app. So, I used the occasion to update the asynchronous functions to use the new async/await approach instead of the existing completion handlers. This article will illustrate some of those code changes (a simplified version) and discuss some of the tradeoffs and design decisions.

## Delegate Callbacks

Core Bluetooth is Apple's native Objective-C framework for writing iOS apps which communicate with hardware devices using Bluetooth Low Energy (BLE). Because the discovery, exploration, and interaction with a remote device is time-consuming, much of the Core Bluetooth API is asynchronous. This is accomplished using the long established and well understood delegate callback technique.

The CBCentralManagerDelegate protocol defines methods which provide updates for the discovery and management of peripheral devices. For example, it contains a callback method to tell the delegate that the central manager connected to a peripheral. The centralManager:didConnectPeripheral: method defined in the header below is invoked by the CBCentralManager when a connection initiated by a call to connectPeripheral:options: has succeeded.

![Original figure 1](/blog/swift-asynchronous-functions/01.png)

The CBCentralManager header code below defines the following to support this asynchronous connection process:

- A weak reference to an optional CBCentralManagerDelegate object to receive delegate callbacks.
- An initializer which accepts an optional CBCentralManagerDelegate object.
- The connectPeripheral:options: method, which has an implementation that invokes the delegates centralManager:didConnectPeripheral: method when a successful connection is made.

![Original figure 2](/blog/swift-asynchronous-functions/02.png)

The Core Bluetooth framework also contains the CBPeripheralDelegate protocol, which defines methods that provide updates on the discovery and use of a peripherals services. The use of delegate callbacks makes sense for Core Bluetooth because it manages the device lifecycle and needs to communicate changes throughout this multi-step process.

## Completion Handlers

When adding a dependency to your app, it is a good idea to encapsulate its use to decouple it from your app as much as possible. When using the Core Bluetooth framework it is common practice to centralize device interaction within a custom class that receives the delegate callbacks. The DeviceService class below is responsible for interacting with Core Bluetooth, and therefore conforms to the CBCentralManagerDelegate protocol.

While the DeviceService class itself needs to know about the device lifecycle, it is not necessary (nor desirable) for it to expose that degree of detail to the rest of the app. The DeviceService can handle the finer details and provide a higher level and result oriented API to the app. When designing this type of API it is more appropriate to use completion handlers rather than delegate callbacks.

To implement completion handlers in Swift you declare methods which accept one or more closures as arguments. The method implementations will then call these passed-in closures to signal completion, making sure to account for all possible code paths. The DeviceService needs to store these closures so it can invoke them when it receives delegate callbacks, therefore the closures must be @escaping. The remainder of this section will contrast three different approaches to designing a closure type to use as a completion handler.

### Single Completion Handler

When you use a closure as a completion handler, the parameters serve the same purpose as a return from a synchronous method. In other words, the parameters are the values that your method implementation will provide to the caller. However, in the case of an error condition the parameters serve the same purpose as a throws statement. Therefore, it is not uncommon for the closure type to include an optional Error object that is nil unless there is an error.

In the code below the DeviceDidConnectClosure typealias is used to define a closure type with two optional parameters. The DeviceService accepts a closure of this type as a completion handler parameter of its connectToDevice(deviceId:completion:) method. The DeviceService must then pass a nil value for one of the two optional completion handler parameters, depending upon whether the connect succeeded or failed.

![Original figure 3](/blog/swift-asynchronous-functions/03.png)

The DeviceViewModel class below calls the connectToDevice(deviceId:completion:) method. Because the isConnected and error parameters are optional, they must be unwrapped at the method call site.

![Original figure 4](/blog/swift-asynchronous-functions/04.png)

### Multiple Completion Handlers

An alternative to using a single completion handler is using multiple completion handlers, with one for each possible result state. Since the connectToDevice(deviceId:completion:) method can either succeed or fail, the DeviceService code below defines the following two closure types:

DeviceDidConnectClosure typealias which accepts a Bool.

ConnectErrorClosure typealias which accepts a DeviceServiceError.

![Original figure 5](/blog/swift-asynchronous-functions/05.png)

When writing code to invoke a method with multiple completion handlers, Xcode autocomplete will help provide correct and concise syntax. This will produce a method call with a distinct scope for each result state. And, because the closure parameters are non-optional, there is no unwrapping needed in your completion handler implementation code.

![Original figure 6](/blog/swift-asynchronous-functions/06.png)

### Result Type

In Swift 5 the Result type was added to the standard library. The Swift Result type is implemented as an enum that has two cases: .success and .failure. Both cases are implemented using generics, so you can choose the associated value type, but the failure type must conform to the Swift Error protocol.

Since the two Result cases map to the connectToDevice(deviceId:completion:) method result states, the Result type is ideal to use in the completion handler type. The DeviceService code below uses the DeviceDidConnectClosure typealias to define a closure type with a single non-optional Result type parameter. Using the Result enum here makes the result state explicit, and helps to produce code with improved safety and clarity.

![Original figure 7](/blog/swift-asynchronous-functions/07.png)

Using the Result enum also improves the code at the method call site. When you switch on the result it produces clean and familiar control flow, and the compiler enforces that both cases are included.

![Original figure 8](/blog/swift-asynchronous-functions/08.png)

## Async/await

The new Swift concurrency model enables asynchronous functions using the keywords async and await. The async keyword is used as part of a function's type to indicate that it might do asynchronous work, and therefore it must be called asynchronously. The await keyword can be used to call a function asynchronously, and it marks that spot as a potential suspension point. This means that, instead of blocking, the async function can yield its thread at that point so other code can be executed on it.

The async/await relationship is similar to the throws/try relationship:

- async: Indicates that a function can suspend execution (i.e. creates an asynchronous function).
- await: Used to mark each line of code that might become suspended.
- throws: Indicates that a function can throw an error (i.e. creates a throwing function).
- try: Used to mark each line of code that might result in an error.

These four keywords can be combined to create an asynchronous throwing function, where the code might become suspended and also might result in an error. In this case the function is marked async throws and the function call is marked try await. Notice that the keyword order is reversed at the call site.

### Bridge Functions

One approach to updating your completion handler API to use async/await is to simply create a bridge function which wraps the existing completion handler method. Then you can deprecate or restrict access to the old method to encourage adoption of your new API. To do this you need to use a continuation, which provides a mechanism to resume a suspended execution or throw an error. The bridge function below uses a CheckedContinuation because it provides runtime checks for correct usage and logs any misuse.

A continuation is an object that the concurrency runtime uses to track the program state at a given point. The system creates a continuation when the code is suspended so it can recreate that program state when execution resumes. This all happens under the hood when you use an async function, however you can also create a continuation explicitly and use it to bridge existing code that uses delegate callbacks or completion handlers.

You can create a CheckedContinuation that can wrap a throwing function by calling the generic function withCheckedThrowingContinuation(_:), which uses a completion handler to provide the continuation. The continuation provided has the following functions that can be used to resume the task awaiting the continuation:

- resume(returning:): Resume the task by having it return a value.
- resume(throwing:): Resume the task by having it throw an error.

In the DeviceService code below, the asynchronous throwing function connectToDevice(deviceId:) has been added to bridge calls to connectToDevice(deviceId:completion:). This bridge function uses a CheckedContinuation to resume execution based upon the case indicated by the Result enum.

![Original figure 9](/blog/swift-asynchronous-functions/09.png)

One of the benefits of using the new concurrency model is the compile time error checking. The code below shows the error displayed in Xcode autocomplete if you attempt to call an async function from within a synchronous function. An async function must operate within an asynchronous context, more specifically a task which can be suspended and resumed. To address this issue we could explicitly create a dedicated task for this work, or require that of the caller by declaring this function to be async.

![Original figure 10](/blog/swift-asynchronous-functions/10.png)

The connectToDevice(deviceId:) method in the DeviceViewModel code below has been marked async, therefore it will require and operate within the asynchronous context provided by its caller.

The method implementation illustrates the use of the new asynchronous throwing bridge function of the DeviceService API. With the exception of the await keyword, this code is identical to the code we would write to call a synchronous throwing function! The code is succinct, easy to read, and errors are caught and handled appropriately rather than being included in the normal execution flow.

![Original figure 11](/blog/swift-asynchronous-functions/11.png)

### Storing Continuations

As discussed earlier, the DeviceService class conforms to the CBCentralManagerDelegate protocol, and therefore it must be able to handle multiple Core Bluetooth delegate callbacks over time. This means that the DeviceService needs to store any completion handlers it uses to notify its own callers of these events. It does that using a custom DeviceInfo class which has a property that matches the closure type. In the code below, the DeviceInfo deviceDidConnect property is used to store the completion handler passed to the connectToDevice(deviceId:completion:) method. That property is then used to invoke the completion handler when the centralManager:didConnectPeripheral: delegate callback method call is received.

![Original figure 12](/blog/swift-asynchronous-functions/12.png)

In the same way that we store our closure, we can store our continuation, we just need to create a property of the correct type. To do this you need to know that a continuation is just a struct with a specific generic type. For example, because the continuation in our async bridge function is checked (as opposed to unsafe), returns a Bool, and can throw an Error, its type is CheckedContinuation<Bool, Error>. In the following code DeviceInfo has been updated to replace the closure property with the connectContinuation property to store the continuation.

![Original figure 13](/blog/swift-asynchronous-functions/13.png)

Now that we have the ability to store the continuation, we can completely remove the wrapped connectToDevice(deviceId:completion:) method, and update our connectToDevice(deviceId:) async function implementation. The code below shows the updated DeviceService, which now uses a stored continuation to resume execution in response to a delegate callback.

![Original figure 14](/blog/swift-asynchronous-functions/14.png)

## What's Next?

This post has presented ways you can use async/await to update your app's asynchronous APIs. However, the new Swift concurrency model contains much more. Some of the new features include:

- AsyncSequence and AsyncStream: These provide asynchronous, sequential, iterated access to their elements.
- Task and TaskGroup: Used to enable parallel execution by defining units of asynchronous work.
- The actor construct: An actor is conceptually like a class that is safe to use in a concurrent environment.

You can learn more about these by reading the [Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/) section in [The Swift Programming Language documentation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/).

Note: Code samples were written using Swift 5.7 and Xcode 14.0.1.
