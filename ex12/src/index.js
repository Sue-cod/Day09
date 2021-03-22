function switchCaseSequential(num) {
    var answer;
    switch (true) {
        case num < 4:
            answer = "Low";
            break;
            case num < 7:
            answer = "Mid";
            break;
            case num < 10:
            answer = "High";
            break;
    }
return answer;
}

switchCaseSequential(1);
switchCaseSequential(2);
switchCaseSequential(3);
switchCaseSequential(4);
switchCaseSequential(5);
switchCaseSequential(6);
switchCaseSequential(7);
switchCaseSequential(9);
console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));
module.exports = switchCaseSequential;