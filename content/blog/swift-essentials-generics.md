Software developers have long understood the many benefits of code reuse. These benefits include an increase in productivity and code quality, and a decrease in testing and maintenance costs. The idea of reducing redundancy in a codebase was popularized by the DRY principle, which was introduced in the 1999 book titled "The Pragmatic Programmer: From Journeyman to Master". The acronym DRY stands for Don't Repeat Yourself, and the principle suggests that "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."

Swift supports the creation of reusable code through the use of generics. Swift generics enable you to write reusable abstract code, which can then be used with different types, avoiding the need for code duplication. To accomplish this, the abstract code uses placeholder types, which act as stand-ins for the actual types that are used during code execution.

## Generic Functions

The following code defines a function named intCount(of:in:) which takes the concrete Swift types Int and [Int]. This function utilizes the map() function, which is a higher-order function of a Swift Array, to determine the number of occurrences of a particular value within an array. In this case, we are dealing with Int types, but what if we needed to do the same thing with String types?

```swift
let intArray = [1,2,2,3,3,3]

func intCount(of int: Int, in intArray: [Int]) -> Int? {
    let mappedItems = intArray.map { ($0, 1) }
    let counts = Dictionary(mappedItems, uniquingKeysWith: +)
    return counts[int]
}

let countOf2s = intCount(of: 2, in: intArray)
```

![Original figure 1](/blog/swift-essentials-generics/01.png)

The function below named stringCount(of:in:) also determines the number of occurrences of a particular value within an array, however this function takes the concrete Swift types String and [String]. This function is identical to the intCount(of:in:) function, with the exception of the parameter types. This code duplication introduces unnecessary risk, and the additional burden of keeping the algorithms synchronized throughout the life of the codebase.

```swift
let stringArray = ["one","two","two","three","three","three"]

func stringCount(of string: String, in stringArray: [String]) -> Int? {
    let mappedItems = stringArray.map { ($0, 1) }
    let counts = Dictionary(mappedItems, uniquingKeysWith: +)
    return counts[string]
}

let countOfTwos = stringCount(of: "two", in: stringArray)
```

![Original figure 2](/blog/swift-essentials-generics/02.png)

Swift enables you to consolidate this code by writing a single generic function which can be invoked with different types. In the code below, the function named count(of:in:) is a generic function. The name of a generic function is followed by a comma separated list of placeholder type names inside angle brackets (<>). Once specified, the placeholder type names can be used as the function parameters, return type, and type annotations within the function body.

The count(of:in:) function below uses the placeholder type name T, instead of an actual type name, like Int or String. The angle brackets tell Swift that T is a placeholder type, which will be replaced with an actual type whenever the function is called. In this case, the Swift compiler ensures that any calls to count(of:in:) are passing in an array of the same type as the element argument. This code sample illustrates the ability to call a single generic function multiple times, each with different argument types.

```swift
let intArray = [1,2,2,3,3,3]
let stringArray = ["one","two","two","three","three","three"]

func count<T: Hashable>(of element: T, in array: [T]) -> Int? {
    let mappedItems = array.map { ($0, 1) }
    let counts = Dictionary(mappedItems, uniquingKeysWith: +)
    return counts[element]
}

let countOf2s = count(of: 2, in: intArray)
let countOfTwos = count(of: "two", in: stringArray)
```

![Original figure 3](/blog/swift-essentials-generics/03.png)

Note: This generic function also specifies the type constraint Hashable in order to use the desired Dictionary initializer within the implementation. More on type constraints later in this post.

## Generic Types

In addition to generic functions, Swift enables you to create generic types. In fact, many of the types in the Swift standard library are built using generics, including collection types like Array and Dictionary. Generic types are defined with one or more placeholder type names within angle brackets. Actual types must then be specified when attempting to instantiate a generic type. For example, an empty Array struct (which is declared Array<Element>) can be created to hold String objects with the syntax Array<String>().

The code below defines a generic type named BlackBox, which is a custom data structure. A BlackBox contains a collection of items, to which you can add more items using the add(_:) method, and from which you can select a random item using the random() method. Like its internal items array, a BlackBox can hold a collection of any kind of element. However, any particular BlackBox instance can only hold elements of a single type, the type that was specified at instance creation. This code sample demonstrates the ability of a generic BlackBox to hold either Int types or String types.

```swift
struct BlackBox<Element> {
    private var items = [Element]()

    mutating func add(_ items: [Element]) {
        self.items.append(contentsOf: items)
    }

    func random() -> Element? {
        guard !items.isEmpty else { return nil }
        let randomIndex = Int.random(in: 0..<items.count)
        return items[randomIndex]
    }
}

var dice = BlackBox<Int>()
dice.add([1, 2, 3, 4, 5, 6])
let roll = dice.random()

var hat = BlackBox<String>()
hat.add(["Ryan", "Carley", "Brayden", "Tanner"])
let winner = hat.random()
```

![Original figure 4](/blog/swift-essentials-generics/04.png)

## Type Constraints

Swift generics can be used to write code that will work with any type. However, there is a limit to the functionality you can provide without knowing some of the conceptual characteristics of a type. Type constraints can be used to specify that a type parameter must inherit from a specific class or conform to a particular protocol. A type constraint is specified by placing a single class or protocol name after the type parameter name, separated by a colon, within the type parameter list.

The decode(eventData:into:) function in the code below is an example of a function that could benefit from the use of generics. This function performs the common task of decoding JSON data into an instance, however it only works with the Event struct. General JSON decoding should be abstracted into a generic function that works with any type.

```swift
struct Event: Decodable {
    var name: String
    var date: String
}

func decode(eventData: Data, into event: inout Event?) {
    do {
        event = try JSONDecoder().decode(Event.self, from: eventData)
    } catch let error {
        print("Decoding error:", error)
    }
}

var event: Event? = nil
decode(eventData: eventJSON.data(using: .utf8)!, into: &event)
```

![Original figure 5](/blog/swift-essentials-generics/05.png)

This next code sample is an attempt to encapsulate JSON decoding into a function that will work with any type. The placeholder type T was added as a type parameter, and used as the jsonObject parameter type and within the function body. This, however, resulted in a compile error, because JSONDecoder requires Decodable types. A type constraint can be used here to apply this necessary restriction.

```swift
func decode<T>(jsonData: Data, into jsonObject: inout T) {
    do {
        jsonObject = try JSONDecoder().decode(T.self, from: jsonData)
    } catch let err
        print("Deco
    }
}
```

![Original figure 6](/blog/swift-essentials-generics/06.png)

In the code below, the generic decode(jsonData:into:) function has been updated to add a Decodable type constraint (<T: Decodable>). The compile error has been resolved, and we can now be certain that we only attempt to decode types that conform to the Decodable protocol. The following code shows the use of a single decode(jsonData:into:) function to safely decode JSON data into both Event and Post types.

```swift
struct Event: Decodable {
    var name: String
    var date: String
}

struct Post: Decodable {
    var title: String
    var author: String
}

func decode<T: Decodable>(jsonData: Data, into jsonObject: inout T) {
    do {
        jsonObject = try JSONDecoder().decode(T.self, from: jsonData)
    } catch let error {
        print("Decoding error:", error)
    }
}

var event: Event? = nil
decode(jsonData: eventJSON.data(using: .utf8)!, into: &event)

var post: Post? = nil
decode(jsonData: postJSON.data(using: .utf8)!, into: &post)
```

![Original figure 7](/blog/swift-essentials-generics/07.png)

## Associated Types

Protocol-oriented programming is a Swift code design idiom that recommends crafting your code around interfaces defined in protocols, while providing code implementation in protocol extensions and conforming types. To support the definition of generic property and method requirements within a protocol, Swift provides associated types. An associated type gives a placeholder name to a type that is used as part of the protocol. The actual type to use for that associated type is not specified until the protocol is adopted.

The code below modifies the BlackBox struct from an earlier code sample, and creates a BlackBox protocol and extension with a default implementation. Now that BlackBox is a protocol, we can create custom types that conform to it. However, because BlackBox declares an associated type named Element (associatedtype Element), any conforming type must specify the actual type to use in its place.

Both the Dice struct and the Hat struct below adopt the BlackBox protocol. They both use the add(_:) and random() default method implementations in the protocol extension, but they specify different actual types for the Element associated type. The Dice struct uses a typealias to specify an Int type, and the Hat struct uses a typealias to specify a String type.

```swift
protocol BlackBox {
    associatedtype Element
    var items: [Element] { get set }
    mutating func add(_ items: [Element])
    func random() -> Element?
}

extension BlackBox {
    mutating func add(_ items: [Element]) {
        self.items.append(contentsOf: items)
    }
    func random() -> Element? {
        guard !items.isEmpty else { return nil }
        let randomIndex = Int.random(in: 0..<items.count)
        return items[randomIndex]
    }
}

struct Dice: BlackBox {
    typealias Element = Int
    var items: [Int]
}

struct Hat: BlackBox {
    typealias Element = String
    var items: [String]
}

var dice = Dice(items: [1, 2, 3, 4, 5, 6])
let roll = dice.random()

var hat = Hat(items: ["Ryan", "Carley", "Brayden", "Tanner"])
let winner = hat.random()
```

![Original figure 8](/blog/swift-essentials-generics/08.png)

Note: Because of Swift's type inference, the typealias is not strictly required in this example. The fulfillment of the items property requirement (var items: [Int]) provides enough information for Swift to infer the Element type (Int).

## Generic Where Clauses

Similar to the way type constraints enable you to add type parameter requirements to generic functions and types, generic where clauses enable you to add requirements for associated types. A generic where clause can be used to require that an associated type conform to a certain protocol, or enforce an equality relationships between different types. A generic where clause starts with the keyword where, followed by a comma separated list of constraints.

The code below is taken from the Sequence protocol in the Swift standard library. The Sequence protocol defines a type that provides sequential, iterated access to its elements, so you can step through them one at a time. This protocol declares an associated type named Element in order to allow conforming types to specify different concrete element types. The Element declaration also includes a generic where clause (where Self.Element == Self.Iterator.Element) to ensure that the Iterator returns the same concrete element type.

```swift
public protocol Sequence {
    /// A type representing the sequence's elements.
    associatedtype Element where Self.Element == Self.Iterator.Element

    /// A type that provides the sequence's iteration interface and
    /// encapsulates its iteration state.
    associatedtype Iterator : IteratorProtocol

    /// Returns an iterator over the elements of this sequence.
    func makeIterator() -> Self.Iterator
}
```

![Original figure 9](/blog/swift-essentials-generics/09.png)

## What's Next

This post has covered the basics of using generics in Swift. There is more to learn though, like recursive constraints and generic subscripts. These topics and more can be found online in the [Swift Programming Language Guide](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/). You might also want to explore the [Swift resources from Apple](https://developer.apple.com/swift/resources/), and the [Swift open-source project](https://www.swift.org).

Note: Code samples were written using Swift 5.1.3 and Xcode 11.3.
