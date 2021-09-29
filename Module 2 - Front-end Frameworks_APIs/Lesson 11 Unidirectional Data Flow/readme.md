# Unidirectional Data Flow

## Brief

### Part 1 - Demonstrate Container and Presentational Component (Code Along)

The presentational components are located in the `./src/components` folder. The container component is located in the `./src/screens` folder. The benefits of classifying `screens` and `components` make it easier for fellow developer to look for relevant codes.

Code along with students to define the three components:
- ProductContainer.js
- AddProduct.js
- ListProduct.js

Do not write code for inverse data and the use of props yet.

### Part 2 - Demonstrate inverse data flow

Add a function in `ProductContainer` that handles new project information, stores it in state (`newProduct` object) and pass it to `AddProduct.js` via props. 

### Part 3 - Demonstrate listing products via props

This part should be familiar to learners. Simply pass the relevant state (an array of `products`) from `ProductContainer` to `ListProduct`.