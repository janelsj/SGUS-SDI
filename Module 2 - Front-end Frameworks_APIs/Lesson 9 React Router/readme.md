# Conditional Rendering & Routing: Lesson

## Brief

In this lesson, we will be covering the following:
1. Conditional Rendering
2. Basic Routing
3. Routing with URL Parameters
4. Routing programmatically with class and functional component

(4) can be difficult to grasp but it is important to go through. Keep the sample code and it might come to good use for project work. Routing programmatically is a very common use case.

### Part 1 - Conditional Rendering

Past assignments have required learners to work on conditional rendering. Learners just need to know this is conditional render. Refer to [Light Bulb Demo](./instructor/routing-app/src/components/CondRenderDemo.js) for sample code.

### Part 2 - Basic Routing

Refer to [Main.js](./instructor/routing-app/src/components/routing-demo/Main.js).

The basic routing only consist of two navigation menu item - "Home" and "About Me". The file demonstrate the use of `<Router>` (renamed from `BrowserRouter`), `<Link>`, `<Switch>` and `<Route>`.

The following code is sufficient for basic routing on "About Me" page, omit `/:name?` from the sample code.

``` js
<Route path="/aboutme">
    <AboutMe />
</Route>
```

### Part 3 - URL Parameter

Passing a parameter via URL is done by indicating `:name` on the Route path. The trailing `?` set this parameter to be optional. See this example at [Main.js](./instructor/routing-app/src/components/routing-demo/Main.js). 

``` js
<Route path="/aboutme/:name?">
    <AboutMe />
</Route>
```

The value of the parameter is retrieved using `useParams` hook. It is demonstrated at [AboutMe.js](./instructor/routing-app/src/components/routing-demo/AboutMe.js). Notice the conditional rendering of parameter value in this sample code.

Class component gets the url parameters via `props`. See code example [here](https://karoldabrowski.com/blog/getting-parameters-from-url-in-a-react-application/).


### Part 4 - Routing Programmatically

Routing programmatically means that we do not hardcode the navigation. Instead, the navigation is generated dynamically. For example, you fetch a list of products from database. To navigate to a product page, you need to pass the ID of the product through the URL Parameter. You cannot hard code this because the products information is dynamic.

This part is the hardest to grasp. If you do not understand this during lesson, fret not. The sample code here will be of good help during project work. Routing programmatically is a common use case. In your subsequent lesson, you will also be required to route programmatically. You may use this sample code as reference.

Nonetheless, the sample code is located at [Main.js](./instructor/routing-app/src/components/routing-demo/Main.js).

Create a clickable component:

```js
const ShowTommy = withRouter(({ history }) => {
  return (
    <div
      onClick={() => {
        history.push("/aboutme/Tommy");
      }}
    >
      About Tommy
    </div>
  );
});
```

Then, use it as a navigation:

```js
<div>
    <Link to="/aboutme/Johnny">About Johnny</Link>
</div>
<div>
    <ShowTommy /> 
</div>
```
