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

function decode(uncoded) {
    let newArr = []
    for (let i = 0; i < uncoded.length; i++){
        if(uncoded[0] === "a"){
            newArr.push(uncoded[1])
        } else if (uncoded[0] === "b"){
            newArr.push(uncoded[2])
        } else if(uncoded[0] === "c"){
            newArr.push(uncoded[3])
        } else if (uncoded[0] === 'd'){
            newArr.push(uncoded[4])
        } else {
            return " "
        }
    }
    return newArr[i];
}

