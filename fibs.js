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

console.log(fibs(10))