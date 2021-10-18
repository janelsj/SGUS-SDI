# XSS Demo

## Launch index.html on browser

Right-click `index.html` and choose "Live Server".

## Attempt simple XSS Demo

The idea of XSS is to inject HTML code to client side content. This is a mini simulation of the bad use of `innerHTML`.

1. We should not trust user input.
2. The user input is now interpreted as HTML code, and it should not.
3. The user input should always be interpreted as value (so later on change .innerHTML to .innerText).

Actual XSS is much more clever. It injects code to the database. After this demo, we will see a sample SQL Injection code.

### 1. Hijack with <h3>
Enter the following code into text field and hit "Fired!" button.
```
<h3>Hello!</h3>
```

### 2. Hijack with <img>

```
<img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/monkey092018.jpg" />
```
