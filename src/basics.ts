

function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
    const res = n1 + n2;
    if (showResult) {
        console.log(phrase + res)
    } else {
        console.log(phrase)
        return res;

    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = false;
const resultPhrase = 'Result is: '

add2(number1, number2, printResult, resultPhrase)