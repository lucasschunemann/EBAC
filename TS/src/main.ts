
interface Operacao {
    (a: number, b: number): number;
}

interface Saudacao {
    (nome: string): string;
}

const multiplicar: Operacao = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Os parâmetros devem ser números válidos.');
    }
    return a * b;
};

const saudacao: Saudacao = (nome) => {
    if (!nome || typeof nome !== 'string') {
        throw new Error('O parâmetro deve ser um nome válido.');
    }
    return `Olá, ${nome.trim()}!`;
};

try {
    const resultadoMultiplicacao = multiplicar(7, 8);
    console.log('Resultado da multiplicação:', resultadoMultiplicacao); 
    const mensagemSaudacao = saudacao('Lucas');
    console.log(mensagemSaudacao); 
} catch (error) {
    console.error('Erro:', error.message);
}
