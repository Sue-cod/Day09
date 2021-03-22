function myDoWhile() {
var i = 0;
var myNumbers = '';
do {
    i !== 9 ? (myNumbers += i + ', ') : (myNumbers += i); 
    ++i; 
  } while (i < 10); 
  return myNumbers; 
}

myDoWhile();
console.log(myDoWhile());
module.exports = myDoWhile;


  