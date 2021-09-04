# JavaScript Functions: Assessment

## Problems

### 1. Create a GST Calculator.

1. Under the `src` folder, create a file named `gst-calc.js`.
2. Write a function `calculate()` that takes in 3 arguments.
   - The total cost
   - The service charge
   - The GST (defaults to 7% if unspecified)
3. When the function is invoked, calculate the payable amount based on the given parameters.

Example:

```js
calculate(10.5, 10); // optional third argument
```

### 2. OTP Sender

1. Under the `src` folder, create a file named `otp-sender.js`.
2. Write a function to be invoked `process()` that takes in a function as an argument.
3. Write additional two functions `sendEmail()` and `sendSms()`. In these functions, use console.log to identify which function is being called.
4. Invoke `process()` twice by passing different function reference as argument and observe the output.

Example:

```js
process(sendEmail);
process(sendSms);
```

### Digital Chef

1. Under the `src` folder, create a file named `chef.js`.
2. Write a function `cook()` that takes in two string arguments.
3. There shall be three outcomes based on the arguments given when `cook()` is being invoked.
   - "cheese" and "rice" would return a value "baked rice"
   - "cheese" and "pasta" would return a value "baked pasta"
   - "egg" and "rice" would return a value "egg fried rice"

Example:

```js
console.log(cook("egg", "rice")); // "egg fried rice"
```

## Submission

You are required to submit your assignment to black board.

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material