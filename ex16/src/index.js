function checkSign(num) {
return (num > 0) ? "positive"
: (num < 0) ? "negative"
: (num === 0) ? "zero";

}

checkSign(10);
checkSign(-12);
checkSign(0);
console.log(checkSign(positive));
console.log(checkSign(negative));
console.log(checkSign(zero));
module.exports = checkSign;