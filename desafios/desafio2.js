function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    
    while (a <= num) {
        if (a === num) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

const input = 21;

if (isFibonacci(input)) {
    console.log(`O número ${input} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${input} NÃO pertence à sequência de Fibonacci.`);
}
