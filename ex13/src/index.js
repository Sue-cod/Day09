function inverseWhile() {
var fiveNumbers = 5;
var result = '';
while(fiveNumbers >= 0) {
    fiveNumbers !== 0 ? (result += fiveNumbers + ',') : (result += fiveNumbers); 
    --fiveNumbers; 
   
}
return result;
}

inverseWhile();
console.log(inverseWhile());
module.exports = inverseWhile;

