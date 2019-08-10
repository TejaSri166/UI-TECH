let app = require('../app');
let util = require('../Utility');

describe('JEST Testing Framework',() => {

    describe('App.JS' , () => {
        // Test Case 1
        test('wishMe() to return Good Morning', () => {
            expect(app.wishMe()).toBe('Good Morning');
        });

        // Test Case 2
        test('wishMe() to return a String', () => {
            expect(typeof app.wishMe()).toBe('string');
        });

        // Test Case 3
        test('wishMe() to be the Length 12', () => {
            expect(app.wishMe().length).toBe(12);
        });

        // Test Case 4
        test('addNumber(10,20) => 30 as result ', () => {
            expect(app.addNumbers(10,20)).toBe(30);
        });

        // Test Case 5
        test('createStudent to return a Student Object', () => {
            expect(app.createStudent()).toEqual({
                name : 'Rajan',
                age : 22,
                course : 'Engineering'
            });
        });
    });

    describe('Utility.js',() => {
        // Test Case 6
        test('reverseStr() should return a rev String', () => {
            expect(util.reverseString('ABC')).toBe('CBA');
        });

        // Test Case 7
        test('getTechnologies() should contain html string', () => {
            let expectedArray = ['html'];
            expect(util.getTechnologies()).toEqual(expect.arrayContaining(expectedArray));
        });

        // Test Case 8
        test('getTechnologies() should contain html string', () => {
            let expectedArray = ['JQuery'];
            expect(util.getTechnologies()).not.toEqual(expect.arrayContaining(expectedArray));
        });
    });
});