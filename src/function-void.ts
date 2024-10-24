

// RETURN TYPES and 'void'

function add(n1: number, n2: number): number {
    return n1 + n2
}


// Code below, typescript infers that the return type is void
function printRes(num: number) {
    console.log(`Result: ${num}`)
}


// function printResult(num: number): void {
//     console.log(`Result: ${num}`)
// }


// The return type of undefined is different and can be used when using functions that does not return an actual value
// function printResult(num: number): undefined {
//     console.log(`Result: ${num}`)
// }
printRes(add(5, 12));


// Code below is the use of FUNCTION TYPES
let combineValues: (a: number, b: number) => number;

combineValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
    console.log(result)
})