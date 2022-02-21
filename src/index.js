module.exports = function toReadable (number) {
    
    let amountOfDigits = number.toString().length;
    let firstDigit = '';
    let secondDigit = '';
    let thirdDigit = '';
    let numberFirstDigit = 0;
    let numberSecondDigit = 0;
    let numberThirdDigit = 0;

    function readFirstDigit (number){
        numberFirstDigit = number % 10;
        switch(numberFirstDigit){
            case 1:{
                firstDigit = "one"; break;
            }
            case 2:{
                firstDigit = "two"; break;
            }
            case 3:{
                firstDigit = "three"; break;
            }
            case 4:{
                firstDigit = "four"; break;
            }
            case 5:{
                firstDigit = "five"; break;
            }
            case 6:{
                firstDigit = "six"; break;
            }
            case 7:{
                firstDigit = "seven"; break;
            }
            case 8:{
                firstDigit = "eight"; break;
            }
            case 9:{
                firstDigit = "nine"; break;
            }
            case 0:{
                firstDigit = "zero"; break;
            }
        }
    }

    function readSecondDigit (number){
        numberSecondDigit = (Math.trunc(number/10)) % 10;
        switch(numberSecondDigit){
            case 1:{
                switch(firstDigit){
                    case "one":{
                        secondDigit = "eleven"; break;
                    }
                    case "two":{
                        secondDigit = "twelve"; break;
                    }
                    case "three":{
                        secondDigit = "thirteen"; break;
                    }
                    case "four":{
                        secondDigit = "fourteen"; break;
                    }
                    case "five":{
                        secondDigit = "fifteen"; break;
                    }
                    case "six":{
                        secondDigit = "sixteen"; break;
                    }
                    case "seven":{
                        secondDigit = "seventeen"; break;
                    }
                    case "eight":{
                        secondDigit = "eighteen"; break;
                    }
                    case "nine":{
                        secondDigit = "nineteen"; break;
                    }
                    case "zero":{
                        secondDigit = "ten"; break;
                    }
                } 
                break;
            } 
            case 2:{
                secondDigit = "twenty"; break;
            }
            case 3:{
                secondDigit = "thirty"; break;
            }
            case 4:{
                secondDigit = "forty"; break;
            }
            case 5:{
                secondDigit = "fifty"; break;
            }
            case 6:{
                secondDigit = "sixty"; break;
            }
            case 7:{
                secondDigit = "seventy"; break;
            }
            case 8:{
                secondDigit = "eighty"; break;
            }
            case 9:{
                secondDigit = "ninety"; break;
            }
            case 0:{
                secondDigit = ""; break;
            }
        }
    }

    function readThirdDigit (number){
        numberThirdDigit = Math.trunc(number/100);
        switch(numberThirdDigit){
            case 1:{
                thirdDigit = "one hundred"; break;
            }
            case 2:{
                thirdDigit = "two hundred"; break;
            }
            case 3:{
                thirdDigit = "three hundred"; break;
            }
            case 4:{
                thirdDigit = "four hundred"; break;
            }
            case 5:{
                thirdDigit = "five hundred"; break;
            }
            case 6:{
                thirdDigit = "six hundred"; break;
            }
            case 7:{
                thirdDigit = "seven hundred"; break;
            }
            case 8:{
                thirdDigit = "eight hundred"; break;
            }
            case 9:{
                thirdDigit = "nine hundred"; break;
            }
        }
    }

    switch(amountOfDigits){
        case 1:{
            readFirstDigit(number);
            return firstDigit;
        }
        case 2:{
            readFirstDigit(number);
            readSecondDigit(number);
            if (numberSecondDigit === 1){
                return secondDigit;
            }
            else if (numberFirstDigit === 0) {
                return secondDigit;
            }
            else
                return secondDigit + ' ' + firstDigit;
        }
        case 3:{
            readFirstDigit(number);
            readSecondDigit(number);
            readThirdDigit(number);
            if (numberSecondDigit === 1){
                return thirdDigit + ' ' + secondDigit;
            }
            else if(numberFirstDigit === 0 && numberSecondDigit === 0){
                return thirdDigit;
                }
            else if (numberSecondDigit === 0) {
                return thirdDigit + ' ' + firstDigit;
            }
            else if (numberFirstDigit === 0) {
                return thirdDigit + ' ' + secondDigit;
            } 
            else return thirdDigit + ' ' + secondDigit + ' ' + firstDigit;
        }
        default:{
            return "empty input or the number is more than 999";
        }
    }
}

