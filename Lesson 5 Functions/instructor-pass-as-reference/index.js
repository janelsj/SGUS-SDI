// Demo and explain the different between invoking a function and passing a function as reference.

function printOnConsole(message) {
  console.log(message);
}

function introduceMyself(print) {
  const intro = "My name is Mickey and I am 12 years old.";
  print(intro);
}

introduceMyself(printOnConsole); // Invoked introduceMyself(), passed printOnConsole as reference.
