let num = parseInt(prompt("Ingrese un numero"));
function factorial(num) {
    let factor = 1;
    if (isNaN(num)) {
        return "Dato no valido";
    }
    else if (num === 1 || num === 0) {
        return 1;
    }
    else {
        factor = factor + num * factorial(num - 1);
    }
    return factor
}

console.log(factorial(num))