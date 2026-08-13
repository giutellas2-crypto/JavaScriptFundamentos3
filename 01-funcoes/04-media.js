function calcularMedia(nota1, nota2) {
    return (nota1 + nota1) / 2;
}

console.log(calcularMedia(8,6));






// function verificarAprovacao(media){
//     if(media > 7){
//         return "Aprovado";
//     }
//     return "Reprovado";
// }

function verificarAprovacao(media){
    return media >=7 ? "Aprovado" : "Reprovado"
}

console.log(verificarAprovacao(8));