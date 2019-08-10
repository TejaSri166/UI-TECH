// Load the Modules
const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

describe('App.js',function() {

    describe('SayHello()', function() {

        let result = app.sayHello();

        // Test Case 1
        it('should return Hello',function() {
            assert.equal(result , 'Hello');
        });

        // Test Case 2
        it('should return a String' , function() {
            assert.isString(result);
        });

        // Test Case 3
        it('should return a String of Length 5',function() {
            assert.lengthOf(result , 5);
        });
    });

    describe('addNumbers()',function() {
        // Test Case 1
        it('Should return 30 ' , function() {
            let value = app.addNumbers(10,20);
            assert.equal(value , 30);
        });

        // Test Case 2
        it('Should return a Number' , function() {
            let value = app.addNumbers(10,20);
            assert.isNumber(value);
        });
    });

    describe('reverseString()',function() {

        // Test Case 1
        it('Should Return a String' , function() {
            let result = app.reverseString('abc');
            assert.isString(result);
        });

        // Test Case 2
        it('Should return ReverseString' , function() {
           let result = app.reverseString('abc');
           assert.equal(result , 'cba');
        });

        // Test Case 3
        it('Should not Return the same string',function() {
            let result = app.reverseString('abc');
            assert.notEqual(result , 'abc');
        });
    });

    describe('Expect Library' , function() {
        let theMsg = "Good Morning";

        // Test Case 1
        it('theMsg Should be a String',function() {
            expect(theMsg).to.be.a('string');
        });

        // Test Case 2
        it('theMsg Should be Equals to Good Morning',function() {
            expect(theMsg).to.equal('Good Morning');
        });

        // Test Case 3
        it('theMsg Should Of Length 12',function() {
            expect(theMsg).to.have.lengthOf(12);
        });
    });
});
