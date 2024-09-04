const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (_, data) => {
    const dados = JSON.parse(data);
    const faturamentos = dados.faturamento_mensal
        .filter(dia => dia.faturamento > 0)
        .map(dia => dia.faturamento);

    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    const mediaMensal = faturamentos.reduce((soma, valor) => soma + valor, 0) / faturamentos.length;
    const diasAcimaDaMedia = faturamentos.filter(faturamento => faturamento > mediaMensal).length;

    console.log(`Menor faturamento: ${menorFaturamento}`);
    console.log(`Maior faturamento: ${maiorFaturamento}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
});
