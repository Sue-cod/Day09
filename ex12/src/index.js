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
}
return answer;

switchCaseSequential(1);
switchCaseSequential(2);
switchCaseSequential(3);
switchCaseSequential(4);
switchCaseSequential(5);
switchCaseSequential(6);
switchCaseSequential(7);
switchCaseSequential(9);
console.log(switchCaseSequential());
module.exports = switchCaseSequential;