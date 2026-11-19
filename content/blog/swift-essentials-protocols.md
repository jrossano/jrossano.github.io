A protocol is an interface that defines a set of properties and methods which are necessary for a particular piece of functionality. The protocol can then be adopted by a class or structure to provide the actual implementation of that functionality. In this way, a protocol is a form of encapsulation, which allows you to interact with the interface without concern for the particular implementation type, which may be injected at runtime. This makes protocols ideal for delegation, which is a design pattern wherein a set of specific responsibilities are handed off to an instance of a protocol conforming type, referred to as the delegate.

## Defining a Protocol

You can define a protocol to specify the interface that you want certain types to satisfy. When types satisfy that protocol they are said to conform to that protocol. The syntax used to define a protocol is very similar to defining a class or structure. You simply use the keyword protocol, followed by the protocol name, and a set of curly braces within which you define the protocol properties and methods.

Property requirements in a protocol are always declared as variables, and specify whether a property must be gettable or gettable and settable. Method requirements in a protocol are declared with just a method signature, omitting the curly braces and method body, and default parameter values are not allowed. Mutating methods must use the mutating keyword to enable value types (structs and enums) to adopt the protocol. Type properties and type methods must be prefixed with the static keyword when they are defined in a protocol.

![Original figure 1](/blog/swift-essentials-protocols/01.png)

## Protocol Conformance

Swift classes, structures, and enumerations can all conform to protocols. The syntax for conforming to a protocol is to add the protocol name after the type name, separated by a colon. A type can declare conformance to multiple protocols by listing the protocol names separated by commas. If the conforming type is a subclass, then its superclass must be listed first before any protocols it adopts. Note that a protocol defines the minimum set of requirements, so a conforming type may contain additional properties and methods, including some that may be declared in other protocols.

The code below defines a protocol named Instrument which requires that conforming types can provide their name and play a Note. The Stringed class states that it adopts the Instrument protocol in its definition, however it does not provide an implementation for the play(note:) method. In this situation the Swift compiler reports an error, and Xcode even offers to generate the missing protocol stubs.

![Original figure 2](/blog/swift-essentials-protocols/02.png)

## Protocol Types

In addition to defining the interface for other types to implement, the protocol itself can be used as a type. The protocol type is sometimes referred to as an existential type, and can be used in the following situations:

- As a parameter type or return type in a function, method, or initializer
- As the type of a constant, variable, or property
- As the type of items in an array, dictionary, or other container

Because a protocol can be used as a type, you can use the type casting operators is and as to check for protocol conformance and cast to a protocol. In the code below, the Guitar class adopts the Instrument protocol, and the Dog class adopts the Animal protocol. When iterating over a mixed array containing both of these types, the code uses the as? type cast operator to conditionally downcast to the Instrument protocol. Note that the instrument constant is only known to be of type Instrument, so the Guitar.strings property cannot be accessed.

![Original figure 3](/blog/swift-essentials-protocols/03.png)

## Protocol Inheritance

A Swift protocol can inherit from other protocols, requiring conforming types to provide implementations for all the property and method requirements in the entire protocol hierarchy. A protocol can inherit from multiple protocols by listing the parent protocols in its declaration, separated by commas.

In the code below, the StringedInstrument protocol inherits from the Instrument protocol. Therefore, when the Guitar class adopts StringedInstrument, it must also conform to Instrument in order to compile.

![Original figure 4](/blog/swift-essentials-protocols/04.png)

## Protocol Composition

Protocol composition enables you to combine multiple protocols into a single requirement without the need to define any new protocol types or create a protocol hierarchy. Although no new protocol type is created, a protocol composition behaves as if you have defined a new temporary local protocol. To prevent the need for conforming types to compose the protocols themselves, it is common to use a typealias to define the composition for reuse throughout the codebase.

In the code below, instrument abilities like Pluckable and Strikeable are broken out into independent protocols. This gives you the flexibility to define different sets of requirements using protocol composition. The typealias StrikeableStringedInstrument combines the requirements of the Strikeable and StringedInstrument protocols. This enables instances of conforming types, like Piano, to be referenced and used as instances of StrikeableStringedInstrument.

![Original figure 5](/blog/swift-essentials-protocols/05.png)

## Protocol Extensions

In the same way that you can extend classes, stuctures, and enumerations in Swift, you can also extend protocols. A protocol extension can be used to add new initializer, computed property, and method implementations to an existing protocol. All types that conform to the existing protocol will have access to these implementations without any modification. Protocol extensions cannot be used to add new requirements to an existing protocol, nor can they be used for protocol inheritance.

One particularly useful application of protocol extensions is the default implementation of protocol requirements. Conforming types automatically gain these default implementations, but may alternatively provide their own implementations. In the code below, a protocol extension is used to provide a default implementation of the formattedName() method requirement of the NameLabel protocol. The EnglishNameLabel struct utilizes this default implementation for protocol conformance, while the JapaneseNameLabel struct provides its own custom implementation.

![Original figure 6](/blog/swift-essentials-protocols/06.png)

## What's Next

This post has covered the basics of using protocols in Swift. There is more to learn though, like using protocols with generics and protocol-oriented programming. These topics and more can be found online in the [Swift Programming Language Guide](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/). You might also want to explore the [Swift resources from Apple](https://developer.apple.com/swift/resources/), and the [Swift open-source project](https://www.swift.org).

Note: Code samples were written using Swift 5.0.1 and Xcode 10.2.1.
