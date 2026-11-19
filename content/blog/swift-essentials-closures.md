Most, if not all, programming languages have a construct for defining reusable sets of instructions. In Swift that construct is a closure. A closure is a self-contained chunk of code that is used to perform a specific task. The most basic type of closure is a named closure, which is more commonly known as a function.

## Functions (Named Closures)

Every function is defined using the func keyword followed by the function name. The function name should describe the task that the function performs. Function definitions can optionally include one or more input parameters. Input parameters are defined within parenthesis following the function name, and include type information. A Swift function may have a single variadic parameter, which allows zero or more argument values, and is made available to the function as an Array. Swift also supports default parameter values, which allows the caller to omit those arguments and accept the default values.

A function can optionally specify an output return type. The output return type is defined after the parameter list, and is preceded by the return arrow -> (a hyphen followed by a right angle bracket). Swift supports returning multiple values using a tuple, which is an ordered list of related values. Swift also supports optional return types, for functions where nil is a valid return value.

![Original figure 1](/blog/swift-essentials-closures/01.png)

## Closures (Unnamed)

Just like functions (named closures), unnamed closures are reusable blocks of functionality. However, unnamed closures use a lightweight syntax and can be passed around and used in your code. An unnamed closure is created inline, and is not defined with a keyword. Instead, it is merely enclosed within curly braces. Following the opening brace, any input parameters are defined within parenthesis. Next is the return arrow followed by the output return type. The start of the closure body is indicated by the in keyword, and it is completed with a closing brace.

The closure expression syntax supports a number of techniques for making the closure less verbose in certain situations.

- Inferring Type From Context - If a closure is passed as an argument to a method, Swift can infer the types of its parameters and return value. This means that you can remove the type information for the input parameters and output return type.
- Implicit Returns from Single-Expression Closures - If a closure implementation contains only a single expression, then the result can be returned implicitly and you can omit the return keyword.
- Shorthand Argument Names - Swift provides shorthand argument names to inline closures. These names allow you to refer to the closure arguments using $0, $1, $2, and so on. If these argument names are used within the closure expression, then they can be omitted from closure argument list. The in keyword can also be omitted, because the closure is now made up entirely of its body.
- Trailing Closure Syntax - Swift supports an abbreviated syntax for use when providing a closure as a function's final argument. A trailing closure is written after the function call's parentheses, and you omit the argument label for the closure. If the closure is the only argument to the function, then the parenthesis can be omitted as well.

![Original figure 2](/blog/swift-essentials-closures/02.png)

## Function Types

Every function has a function type, made up of the input parameter types and the output return type. In Swift, function types can be used just like any other type. This allows you to define a constant or variable to be of a specific function type. Then you can use that function variable to assign and call a function of that type.

![Original figure 3](/blog/swift-essentials-closures/03.png)

You can use function types as input parameters and output return types as well. Using function types for input parameters enables you to leave aspects of the function implementation for the caller to supply. This provides developers with a powerful functional alternative to using the object-oriented command and strategy patterns.

![Original figure 4](/blog/swift-essentials-closures/04.png)

## Higher-order Functions

One of the ways in which Swift supports the functional programming paradigm is by providing several higher-order functions. Higher-order functions are functions that accept one or more functions as arguments. The Swift collection classes Array and Dictionary provide support for the popular map, filter, and reduce functions.

### Map Function

The map function is used to loop over a collection and apply the same operation to each element in the collection. The map function returns an array containing the results of applying a mapping or transform function to each item. In Swift, a map function is declared as a method on the Array class with the signature func map<T>(transform: (Element) throws -> T) rethrows -> [T]. The method takes a transform closure argument that accepts an element of this sequence as its parameter and returns a transformed value of the same or of a different type.

![Original figure 5](/blog/swift-essentials-closures/05.png)

### Filter Function

The filter function is used to loop over a collection and return an Array containing only those elements that satisfy an include condition. The filter method has a single closure argument that specifies the include condition. This is a closure that takes as an argument the element from the collection and must return a Bool indicating if the item should be included in the result.

![Original figure 6](/blog/swift-essentials-closures/06.png)

### Reduce Function

The reduce function is used to loop over a collection and return all items combined as a single new value. In Swift, a reduce function is declared as a method on the Array class with the signature func reduce<Result>(initialResult: Result, nextPartialResult: (Result, Element) throws -> Result) rethrows -> Result. The method takes a nextPartialResult closure argument that combines an accumulating value and an element of the sequence into a new accumulating value, to be used in the next call of the nextPartialResult closure or returned to the caller.

![Original figure 7](/blog/swift-essentials-closures/07.png)

## What's Next

This post has covered the basics of using closures in Swift. There is more to learn though, like capturing values and using escaping closures to start asynchronous operations. These topics and more can be found online in the [Swift Programming Language Guide](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/). You might also want to explore the [Swift resources from Apple](https://developer.apple.com/swift/resources/), and the [Swift open-source project](https://www.swift.org).

Note: Code samples were written using Swift 4.0 and Xcode 9.0.
