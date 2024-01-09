const analyzeArray = require('./analyzeArray');

describe('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length', function () {
    test('says 4, 1, 8 & 6', function () {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    })
})