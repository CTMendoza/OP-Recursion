//pseudocode for mergesort:
// split the array into two halves
// sort left half of the array
// sort right half of the array
// merge two halves together

function mergeSort (array) {
    if (!Array.isArray(array)) return console.log('argument is not an array') // base case
    if(array.length <= 1) return array // base case

    let result = []
    let middle = Math.floor(array.length / 2)
    let left  = mergeSort(array.slice(0, middle)) // calls mergeSort on newly created array based on left half of original array
    console.log(`left:${left}`)
    let right = mergeSort(array.slice(middle)) // calls mergeSort on newly created array based on right half of original array
    console.log(`right ${right}`)
    let i = 0
    let j = 0
    console.log(`left:${left}, right ${right}`)

    while (i < left.length && j < right.length) {
        if(left[i] < right [j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    
    return result.concat(left.slice(i), right.slice(j)) //append remaining elements
}

console.log(console.log(mergeSort([18,5,29,1,78,])))
