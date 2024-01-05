const reverseString = require('./reverse-string');

describe("A reverseString function that takes a string and returns it reversed", function () {
    test('says "hello"', function () {
        expect(reverseString('hello')).toEqual("olleh");
    })
})