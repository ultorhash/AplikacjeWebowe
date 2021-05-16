class Smerf
{
    cap: boolean;
    boots: boolean;
    color: 'blue';
    capColor: string;
    moving(): void {};
    talking(): void {};
}

// First solution

// class CanWork
// {
//     working(): void {}
// }

// class Painter extends Smerf
// {
//     painting(): void {}
//     working = new CanWork().working;
// }

// class Singer extends Smerf
// {
//     singing(): void {}
//     working = new CanWork().working;
// }

class CanWork extends Smerf
{
    working(): void {}
}

class Painter extends CanWork
{
    painting(): void {}
}

class Singer extends CanWork
{
    singing(): void {}
}