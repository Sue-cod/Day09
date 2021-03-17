function functionElse(num) {
    var result;
    if (num <= 5) {
      return result "5 or smaller";  
    } else {
        return result "Bigger than 5";
    }
}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);
console.log(functionElse());

module.exports = functionElse;