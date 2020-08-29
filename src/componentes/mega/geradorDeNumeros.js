export default (qnt) => {
    return (
        Array(qnt)
        .fill(0)
        .reduce((nums) => ([...nums, gerarNovo(60, 1, nums)]), [])
        .sort((a, b) => a - b)
    );
}

function gerarNovo(max, min, array) {
    const numeroSorteado = parseInt((Math.random() * (max - min + 1)) + min);
    return array.includes(numeroSorteado) ? gerarNovo(max, min, array) : numeroSorteado;
}