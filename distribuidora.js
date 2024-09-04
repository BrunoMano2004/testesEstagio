const distribuidora = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const total = Object.values(distribuidora).reduce((num, valor) => num + valor, 0)

for (let estado in distribuidora) {
    const percentual = (distribuidora[estado] / total) * 100
    console.log(`${estado}: ${percentual.toFixed(2)}%`)
}
