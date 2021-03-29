export class Board
{
    public board: HTMLElement;
    constructor ()
    {
        this.board = document.getElementById("board")!
    }

    createBoard(fieldCount: number)
    {
        const boardX: number = this.board.clientWidth;
        const boardY: number = this.board.clientHeight;

        for (let i = 0; i < fieldCount * fieldCount; i++)
        {
            const field = document.createElement('div');
            field.style.width = `${boardX / fieldCount}px`
            field.style.height = `${boardY / fieldCount}px`
            field.style.backgroundColor = "lightgray"
            field.style.border = "3px solid gray"
            this.board.appendChild(field);
        }
    }
}