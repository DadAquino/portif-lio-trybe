const sum = require('./sum');

describe('the sum function', () => {
    it('retorna 9 quando sum(4, 5)', () => {
        expect(sum(4,5)).toEqual(9);
    });

    it('retorna 0 quando sum(0, 0)', () => {
        expect(sum(0,0)).toEqual(0);
    });
});

describe('testa se a função retorna erros', () => {
    it('testa evento de erro', () => {
        expect(() => {sum(5 ,'5')}).toThrow();
    });
    it('testa evento de erro com mensagem', () => {
        expect(() => {sum(5 ,'5')}).toThrow(new Error('parameters must be numbers'));
    });
});