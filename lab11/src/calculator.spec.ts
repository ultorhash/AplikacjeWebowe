import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two numbers', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Add(2,2)).toEqual(4);
    });

    it('should correct substract two numbers', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Substract(10,3)).toEqual(7);
    });

    it('should correct multiply two numbers', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Multiply(10,4)).toEqual(40);
    });

    it('should correct divide two numbers', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Divide(45,5)).toEqual(9);
    });
});