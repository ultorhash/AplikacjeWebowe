export class FizzBuzz {
    public numbers: number[] = [];

    constructor(from: number, to: number) {
        if (from >= to) throw new Error('From is less or equal to.')
        else
        {
            for (let i = from; i <= to; i++)
            {
                this.numbers.push(i);
            }
        }
    }

    show(): (number | string)[]
    {
        let array: (number | string)[] = [];

        this.numbers.forEach(n => {
            if (n % 3 === 0 && n % 5 === 0) array.push('FizzBuzz');
            else if (n % 5 === 0) array.push('Fizz');
            else if (n % 3 === 0) array.push('Buzz');
            else array.push(n);
        })

        return array;
    }
}