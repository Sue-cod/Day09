function logicalAndOperator(num) {
    if (num <= 80 && >= 40) {
        return "Yes";
    }
    return "No";
}

logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
console.log(logicalAndOperator());



module.exports = logicalAndOperator;