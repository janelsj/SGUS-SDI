/*
    Create two functions:
    - printHardcopy() that console.log("send to printer");
    - printPDF() that console.log("generate PDF");

    And pass both functions as reference to processInvoice to observe a different outcome.

    Ask your instructor for help!
*/

function printHardcopy() {
  console.log("send to printer");
}

function printPDF() {
  console.log("generate PDF");
}

function processInvoice(print) {
  // Something is done here to process invoice
  print(); // this is invoking the function, it's different from print (print itself without
  print(); // the () makes the function not do anything at all.)
}

processInvoice(printHardcopy); // this is **NOT** processInvoice(printHardcopy())
processInvoice(printPDF);