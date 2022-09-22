const obj = require('./encode-decode');

describe('testes do encode-decode', () => {
    test('testa se encode e decode são funções', () => {
        expect(obj.decode()).not.toBeDefined();
    });
    test('testa se é retornado o valor esperado', () => {
        expect(obj.encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
    });
    test('testa se é retornado o valor esperado', () => {
        expect(obj.decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });
    test('test se a string tem o mesmo lenght do que foi mandado', () => {
        expect(obj.decode('1, 2, 3, 4, 5')).toHaveLength(('1, 2, 3, 4, 5').length);
    });
});