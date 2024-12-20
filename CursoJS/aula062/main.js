function frizzBuzz () {
     const string1 = 'Frizz';
     const string2 = 'Buzz'
    for(let i = 0 ; i <= 100 ; i++) {
        let for3 = i % 3 === 0;
        let for5 = i % 5 === 0;
        if (for3 === true && for5 === true) {
            console.log(i, string1+string2)
            continue;
        }
        else if (for3 === true) {
            console.log(i, string1)
            continue;
        }
        else if (for5 === true) {
            console.log(i, string2)
            continue;
        }
        else console.log(i)
    }
}
frizzBuzz() //se colocar o laço fora da função fica mais fácil haha 