function biggerNum (n1, n2) {
    if (n1 === n2) {
        return `${n1} e ${n2} são iguais`
    }
    else if (n1 > n2) {
        return n1
    }
    else {
        return n2
    }
}
const num1 = 8
const num2 = 8

console.log(biggerNum(num1, num2))