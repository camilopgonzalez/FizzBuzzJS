const assert = require('chai').assert;
const fizzbuzz = require('../app/fizzbuzz.js');

describe ('normal behaviour', function(){
    it('Returns number if not multiple of 3 or 5', function(){
        const value = 2;
        const number = new fizzbuzz(value);
        const result = number.codifyfizzbuzz();

        assert.equal(result, value);
    });
    it('Returns fizz if multiple of 3', function(){
        const value = 12;
        const number = new fizzbuzz(value);
        const result = number.codifyfizzbuzz();

        assert.equal(result, 'fizz');
    });
    it('Returns buzz if multiple of 5', function(){
        const value = 5;
        const number = new fizzbuzz(value);
        const result = number.codifyfizzbuzz();

        assert.equal(result, 'buzz');
    });
    it('Returns fizzbuzz if multiple of 3 and 5', function(){
        const value = 15;
        const number = new fizzbuzz(value);
        const result = number.codifyfizzbuzz();

        assert.equal(result, 'fizzbuzz');
    })
});