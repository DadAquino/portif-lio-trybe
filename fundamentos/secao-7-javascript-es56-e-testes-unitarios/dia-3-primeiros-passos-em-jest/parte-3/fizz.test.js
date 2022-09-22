const fizz = require('./fizz');

describe('testes da função fizzbuzz', () => {
    test('retorno fizzbuzz quando 15', () => {
        expect(fizz(15)).toEqual('fizzbuzz');
    });
    test('retorno fizz quando 9', () => {
        expect(fizz(9)).toEqual('fizz');
    });
    test('retorno buzz quando 10', () => {
        expect(fizz(10)).toEqual('buzz');
    });
    test('retorna o num quando não divisivel por 3 nem 5', () => {
        expect(fizz(7)).toEqual(7);
    });
    test('retorna false quando não for número', () => {
        expect(fizz('5')).toEqual(false);
    });
});