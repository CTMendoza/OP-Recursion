function fibs (length) {
    let array = []
    let first = 0
    let second = 1
    for(i = 0; i < length; i++) {
        array.push(first) //0
        let temp = first + second //2
        first = second //1
        second= temp //2
    }
    return array
}


function fibsRec(length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [0];
    } else if (length === 2) {
        return [0, 1];
    }
    
    let prevArray = fibsRec(length - 1);
    let nextFib = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2];
    prevArray.push(nextFib);
    
    return prevArray;
}

console.log(fibs(2))
console.log(fibsRec(5))