interface ISmerf
{
    cap: boolean;
    boots: boolean;
    color: 'blue';
    moving(): void;
    talking(): void;
}

interface ICanWork
{
    working(): void;
}

interface ICanSing
{
    singing(): void;
}

interface ICanPaint
{
    painting(): void;
}

interface ICanGrowFlowers
{
    growFlowers(): void;
}

interface ICanRun
{
    running(): void;
}

interface IPainter extends ISmerf, ICanWork, ICanPaint {}

interface Singer extends ISmerf, ICanWork, ICanSing {}

interface ISmurfette extends ISmerf, ICanSing, ICanPaint, ICanGrowFlowers {}

interface IWorker extends ISmerf, ICanWork, ICanRun {}

interface IMischief extends ISmerf, ICanRun
{
    blowingUp(): void;
}

interface Papa extends ISmerf, ICanGrowFlowers, ICanWork, ICanRun
{
    manager(): void;
}