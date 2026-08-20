const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);

// saída [2, 4, 6]

const impar = numeros.filter((numero) => numero % 2 === 1);

console.log(impar);

// saída [1, 3, 5]