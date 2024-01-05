const capitalize = require('./capitalize');

describe("A capitalize function that takes a string and returns it with the first character capitalized", function () {
    test('says "France"', function () {
      expect(capitalize('fRaNcE')).toEqual("France");
    });
  });
  