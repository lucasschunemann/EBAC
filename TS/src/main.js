var multiplicar = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Os parâmetros devem ser números válidos.');
    }
    return a * b;
};
var saudacao = function (nome) {
    if (!nome || typeof nome !== 'string') {
        throw new Error('O parâmetro deve ser um nome válido.');
    }
    return "Ol\u00E1, ".concat(nome.trim(), "!");
};
try {
    var resultadoMultiplicacao = multiplicar(7, 8);
    console.log('Resultado da multiplicação:', resultadoMultiplicacao); // Saída: 56
    var mensagemSaudacao = saudacao('Lucas');
    console.log(mensagemSaudacao); // Saída: Olá, Lucas!
}
catch (error) {
    console.error('Erro:', error.message);
}
