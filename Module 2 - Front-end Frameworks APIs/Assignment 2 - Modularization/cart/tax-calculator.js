function calculate (payable, hasServiceCharge){
    payable = hasServiceCharge ? payable = payable * 1.1 : payable;
    return payable * 1.07;
}

module.exports = calculate;
