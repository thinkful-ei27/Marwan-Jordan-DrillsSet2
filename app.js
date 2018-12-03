function jediName(firstName,lastName){
    let fiThree = lastName.slice(0,3)
    let fiTwo = firstName.slice(0,2)
    return fiThree + fiTwo;
}

function beyond (num) {
    if (num === Infinity || num === -Infinity) {
        console.log('And beyond');
    } else if (num > 0){
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}
