//npm rnu test

import { FizzBuzz } from './fizzBuzz';

describe('FizzBuzzTest', () => {
    let fizzBuzz: FizzBuzz;
    let expectedArray: (string | number)[] = [];

    it('should return correct array with filled answers', () => {
        fizzBuzz = new FizzBuzz(20, 30);
        expectedArray = ["Fizz", "Buzz", 22, 23, "Buzz", "Fizz", 26, "Buzz", 28, 29, "FizzBuzz"];

        expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
        expect(fizzBuzz.show()).toEqual(expectedArray);
    });

    it('should throw error cause of bad parameters', () => {
        
        expect(expect(() => {
            fizzBuzz = new FizzBuzz(30, 10);
        }
        ).toThrow('From is less or equal to.'));
    });
})