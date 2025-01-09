const faturamentoMensal = [
    { dia: 1, valor: 0 },
    { dia: 2, valor: 1500 },
    { dia: 3, valor: 2300 },
    { dia: 4, valor: 0 },
    { dia: 5, valor: 1800 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 0 },
    { dia: 8, valor: 2500 },
    { dia: 9, valor: 2000 },
    { dia: 10, valor: 0 }
];

const valoresValidos = faturamentoMensal.filter(d => d.valor > 0).map(d => d.valor);
const menorValor = Math.min(...valoresValidos);
const maiorValor = Math.max(...valoresValidos);
const mediaMensal = valoresValidos.reduce((acc, valor) => acc + valor, 0) / valoresValidos.length;
const diasAcimaDaMedia = faturamentoMensal.filter(d => d.valor > 0 && d.valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
