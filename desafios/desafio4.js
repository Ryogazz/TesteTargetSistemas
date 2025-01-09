const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

const percentualPorEstado = Object.entries(faturamentoPorEstado).map(([estado, valor]) => ({
    estado,
    percentual: ((valor / valorTotal) * 100).toFixed(2) + '%'
}));

percentualPorEstado.forEach(({ estado, percentual }) =>
    console.log(`Estado: ${estado}, Percentual: ${percentual}`)
);
