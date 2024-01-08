const caesarCipher = require('./caesarCipher');

describe('A caesarCipher function that takes a string and a shift factor and returns it with each character shifted', function () {
    test(`Encrypted message to say "Hello, World!`, function () {
        expect(caesarCipher('Attack at dawn!', 12)).toEqual('Mffmow mf pmiz!');
    });
});