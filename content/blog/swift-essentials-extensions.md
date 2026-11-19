Retroactive modeling is the practice of using existing types to represent new concepts, without modifying those types. This technique is important for reusing existing structures, while maintaining compatibility with the current usage. Swift supports retroactive modeling through the use of extensions. Extensions enable you to add new functionality to existing types, without the need to have access to the original source code. Swift extensions are similar to categories in Objective-C, and can be used to extend a class, struct, enum, or protocol.

Swift extensions can be used to add new initializers, methods, computed properties, and nested types. You can even use them to provide default implementations for protocol methods. (Protocol extensions will be covered in a future blog post.) It is important to be aware, however, that any extensions added to an existing type will be available on all existing instances of that type.

## Initializers

Extensions allow you to add new convenience initializers to an existing type. This enables you to include additional initialization options and default values to use during object creation. Extensions can also be used on value types (structs and enums) to utilize the default memberwise initializer through the use of initializer delegation.

In the code below, a convenience initializer has been added to the User struct. However, once you add a custom initializer to a struct you lose the auto-generated memberwise initializer. This constraint is intended to prevent the accidental circumvention of necessary initialization code. The result is that the default initializer is neither available to the caller, nor available for delegation from within your custom initializer.

![Original figure 1](/blog/swift-essentials-extensions/01.png)

Swift provides a way to solve this issue using an extension. In the code below, the convenience initializer has been added using an extension. By extending the struct the auto-generated memberwise initializer is retained, and both initializers are now available.

![Original figure 2](/blog/swift-essentials-extensions/02.png)

## Methods

You can use an extension to add a type method or instance method to an existing type. As with methods from the original implementation, extension methods that modify the state of a value type must be marked with the mutating keyword.

In the code below, extensions are used to add the instance method printCoordinates() and the mutating instance method doubleRadius() to the Circle struct.

![Original figure 3](/blog/swift-essentials-extensions/03.png)

## Computed Properties

Unlike stored properties, computed properties do not store any values. They instead provide a getter and optional setter to retrieve and set other properties indirectly. Extensions can be used to add new computed type properties and computed instance properties to an existing type. Extensions cannot be used to add new stored properties, or add observers to existing properties.

In the code below, the Ingredient struct is extended with a new computed property named grams.

![Original figure 4](/blog/swift-essentials-extensions/04.png)

## Nested Types

Swift supports nested types, which can be classes, structs, or enums that are embedded within another type. Nested types are typically used to support the functionality of the more complex enclosing type. However, nested types can also be used outside of the enclosing type to make the code safer and more readable. For example, an extension can be used to add constants for the set of keys your app uses to store and retrieve user default values.

In the code below, the UserDefaults class is extended with the nested enum Keys, within which static constant string properties are defined.

![Original figure 5](/blog/swift-essentials-extensions/05.png)

## Protocol Conformance

Extensions enable you to conform an existing type to a new protocol, and add any methods or properties required by that protocol.

In the code below, the Book struct is extended to conform to the CustomStringConvertible protocol. Types that conform to the CustomStringConvertible protocol must define a description property which implements the string representation of an instance. The description property is used by the String(describing:) initializer and the print(_:) function.

![Original figure 6](/blog/swift-essentials-extensions/06.png)

## What's Next

This post has covered the basics of using extensions in Swift. There is more to learn though, like extending generic types and using protocol extensions. These topics and more can be found online in the [Swift Programming Language Guide](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/). You might also want to explore the [Swift resources from Apple](https://developer.apple.com/swift/resources/), and the [Swift open-source project](https://www.swift.org).

Note: Code samples were written using Swift 4.1 and Xcode 9.3.
