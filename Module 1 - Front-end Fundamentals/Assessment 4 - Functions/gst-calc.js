function calculate (totalCost, serviceCharge, GST = 7) {
    return totalCost * (1 + serviceCharge/100 ) * (1 + GST/100);
}

console.log(calculate(10.5, 10));