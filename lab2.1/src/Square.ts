import { PlayerColor } from './PlayerColor';
import { Symbol } from './Symbol';

export class Square
{
    public x: number;
    public y: number;
    public value: string;
    public mark: HTMLElement;
    public field: HTMLElement;
    public isChecked: boolean = false;
    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
        this.value = '-';
        this.field = document.createElement('div');
        this.field.style.display = "flex";
        this.field.style.justifyContent = "center";
        this.field.style.alignItems = "center";
        this.field.style.backgroundColor = "white";
        this.mark = document.createElement('p');
        this.mark.style.fontSize = "20px";
        this.mark.style.fontWeight = "bold";
        this.field.appendChild(this.mark);
    }

    fillField(symbol: Symbol, color: PlayerColor)
    {
        if (!this.isChecked)
        {
            this.mark.innerHTML = `${symbol}`;
            this.value = `${symbol}`;
            this.isChecked = true;
            this.field.style.fontSize = "bold"
            this.field.style.color = `${color}`;
        }     
    }
}