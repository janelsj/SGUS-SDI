# Object-oriented Programming: Assessment

## Question 1

### In your own word, explain the OOP concept - Inheritance.

```
Your answer here (maximum 100 words):
Inheritance allows the derived child classes to extend and/or reuse (i.e. inherit) some or all of the non-private methods and attributes from the parent class. To inherit methods and attributes from the parent class, keywords such as 'extends' and 'super' are used.
```


### Research and define a scenario where this concept can be applied.

```
Your answer here (minimum 400 words):
For example, there are a set of predefined properties which are common for all vehicles and there are a set of properties which are specific for a particular vehicle (eg. bike, car etc). The vehicle can be a parent class, from which we derive child classes like Bike or Car. The 'vehicle' parent class should first be declared with a set of properties that are common to all vehicles, so that these common properties will not have to be repeated in every child vehicle that is subsequently created. These child classes share the common properties from the parent class "vehicles" of being able to run on fuel and carry passengers, but each child class differ in the number of passengers they can and other such properties.
```
___

## Question 2

### In your own word, explain the OOP concept - Encapsulation.

```
Your answer here (maximum 100 words):
Encapsulation enables data attributes and methods to be kept private within the object itself and restrict access to its internal data. With encapsulation, users will not be able to access these private attributes and methods from the outside, unless keywords such as 'get' and 'set' are used. 'get' enables users to retrieve 'read-only' information while 'set' enables users to set/manipulate the values for the specified property.
```


### Research and define a scenario where this concept can be applied.

```
Your answer here (minimum 400 words):
Both "Abstraction" & "Encapsulation" are intertwined and work hand in hand with each other. Abstraction determines which details to be made visible and Encapsulation provides the level of access right to that visible details. i.e. – It implements the desired level of abstraction.
 
As an example, when a user switch on a Bluetooth, the user is able to connect to another mobile or bluetooth enabled devices but not able to access the other mobile features like dialing a number, accessing sms inbox etc. The Bluetooth feature has given the user some level of access to transfer data to the other device but no permission to access all attributes of the other device.
 
Another point is when mobile A is connected with mobile B via Bluetooth whereas mobile B is already connected to mobile C then A is not allowed to connect C via B. This is because of accessibility restriction.
```
___

## Question 3

### In your own word, explain the OOP concept - Abstraction.

```
Your answer here (maximum 100 words):
Abstraction hides complexities of the internal interface from the user. When creating the object or class, an external interface (e.g. a function accessible to users from outside) is designed specifically for the user to manipulate or interact with. The internal implementation of the class and the internal interface, which are hidden from the user, can be changed independently without changing how the external interface is presented to the user.
```


### Research and define a scenario where this concept can be applied.

```
Your answer here (minimum 400 words):
A laptop consists of many things such as processor, motherboard, RAM, keyboard, LCD screen, wireless antena, web camera, usb ports, battery, speakers etc. The user does not need to know the internal details of the laptop before operating it or how internally LCD screens, keyboard, web camera, battery, wireless antena, speakers works.  The user just needs to know how to operate the laptop by switching it on. The intrinsic details are invisible. Here, the laptop is an object designed to hide its complexity.
```
___

## Question 4

### In your own word, explain the OOP concept - Polymorphism.

```
Your answer here (maximum 100 words):
Polymorphism allows derived classes to take many forms, which properties or methods differ from the parent class. Derived classes can change the behaviour of the parent class through overwriting some properties or methods of the parent class. Derived classes can also have their own additional property or method, or may create objects with many different behaviours and more than one realisation.
```


### Research and define a scenario where this concept can be applied.

```
Your answer here (minimum 400 words):
An example of polymorphism is cursor behaviour. A cursor may take different forms like an arrow, a line, cross, or other shapes depending on the behaviour of the user or the programme mode. With polymorphism, a method or subclass can define its behaviors and attributes while retaining some of the functionality of its parent class. For instance, if the base class is designed to display date and time, then for the derived class, a method can be created to not only inherit the properties from the parent class but also to include additional functionality, where an additional welcome message can be displayed alongside the original date and time from the parent class. The goal of Polymorphism in Object-oriented programming is to enforce simplicity, making codes more extendable and easily maintaining applications. Polymorphism builds on the principle of inheritance (which enables the creation of class hierarchies, where a base class gives its behaviour and attributes to a derived class), to enable modification of the functionality of the parent class to behave differently.
```
