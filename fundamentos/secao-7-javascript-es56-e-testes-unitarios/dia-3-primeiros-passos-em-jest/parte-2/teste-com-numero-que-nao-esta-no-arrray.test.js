const arr = require('./arr');

describe('testes da função arr', () => {
    it('teste de retorno correto', () => {
        expect(arr([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});