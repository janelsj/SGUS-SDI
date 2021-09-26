# Class Component State & Life Cycle: Assessment

## Brief

The objective of this assessment aims to complement the practical exercises you have done in lesson and assignment. In the lesson, you have faced certain complex syntax such as `this`, `.bind()` and `{}` in JSX. Let's dive a little more to understand what are these all about. Let the questions in this assessment guide you through your research.

### Question 1

Why do we have to prefix function with `this.` (Example: `this.functionName`) within a class component when we reference a function from another function?

```
'this.functionName' is used within the render() scope to reference the class method named 'functionName' as defined within the class instance.

Since the value of 'this' always depends on what Object the function is called, 'this' here correctly refers to the component instance, which is what we want, instead of the global scope (or the window object).
```

### Question 2

Qn 2.1 - Explain in your own words what does `this.functionA = this.functionA.bind(this);` do.

```
The bind() method creates a new function instance whose 'this' value is bound to the value that was passed into bind(). It allows us to specify the scope/context that the function will execute in (ie. in this case, 'this' means within the context of the specified class component instance).

In Class Components in React, when we pass an event handler function reference as a callback, the event handler method loses its implicitly bound context. Without binding to 'this' (ie. .bind(this)), after the event occurs and the handler is invoked, the 'this' value falls back to default binding and is set to undefined, as class declarations and prototype methods run in strict mode in JavaScript.

When we bind the 'this' of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context.
```

Qn 2.2 - Why do you have to write `this.functionA = this.functionA.bind(this);` in constructor?

```
We bind functions in constructor so that their references to 'this' don't change on each re-render. Otherwise, each time a parent class re-renders, binding will happen, and new function reference will get created and passed to children classes, which are going to think that props have changed when they actually haven't.
```

### Question 3

In HTML, we write an inline style with `<div style="background-color:red">` while in React, we write it as `<div style={{backgroundColor:'red'}}>`. Give an explanation on the differences in your own words.

```
In React, the value of the inline style attribute must be a JavaScript object. Properties with more than one name separated with hyphens are written in camel casing instead (ie. "backgroundColor" instead of "background-color").

For "{{backgroundColor:'red'}}", the object literal {backgroundColor:'red'} is interpolated between the {} curly braces, which is a special syntax in React, to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string. An alternative would be to predefine a variable assigned to {backgroundColor:'red'} (eg. const bgColor={backgroundColor:'red'}), then use the variable in the inline style (eg. <div style={bgColor}>).
```

### Reference:
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
