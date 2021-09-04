/*
    Demonstrate the following:
        1. How each case is entered into by matching the string value
        2. The purpose of "break" keyword prevent the code execution to flow to another case. Try remove a break.
        3. The "default" keyword will execute when none of the cases are matched.
*/

const environment = "production";

switch (environment) {
  // when environment is specified as production
  case "production":
    console.log("I am production environment");
    break;

  // when environment is specified as staging
  case "staging":
    console.log("I am staging environment");
    break;

  // when environment is not specified or specified as environment
  case "development":
    console.log("I am development environment");

  default:
    console.log("There is no environment");
}
