function jediName(firstName, lastName) {
    let fiThree = lastName.slice(0, 3)
    let fiTwo = firstName.slice(0, 2)
    return fiThree + fiTwo;
}

function beyond(num) {
    if (num === Infinity || num === -Infinity) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}

function decode(uncoded) {
    const newArr = [];
    const splitArr = uncoded.split(" ");
    for (let y in splitArr) {
        if (splitArr[y][0] === "a") {
            newArr.push(splitArr[y][1])
        } else if (splitArr[y][0] === "b") {
            newArr.push(splitArr[y][2])
        } else if (splitArr[y][0] === "c") {
            newArr.push(splitArr[y][3])
        } else if (splitArr[y][0] === 'd') {
            newArr.push(splitArr[y][4])
        } else {
            newArr.push(" ")
        }
    }
    return newArr.join("");
}

function daysInMonth(month, leapYear) {


    let result = ""

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days.`
            break;

        case 'April':
        case 'September':
        case 'November':

            result = `${month} has 30 days`
            break;

            case 'February':
            if(leapYear === true){
                result = `${month} has 29 days`
            } else {
                result = `${month} has 28 days`
            }

            break;

            default:
            throw Error ('Must provide a valid month.')
            break;
    }

    return result;

  
}