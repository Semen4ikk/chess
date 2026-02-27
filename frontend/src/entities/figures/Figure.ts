import  {type Colors} from "../Colors.ts";
import logo from '../../image/black-king.png'
import  {type Cell} from "../Cell.ts";

export enum FiguresName{
    FIGURE = "Фигура",
    KING = "Король",
    KHIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",

}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FiguresName;
    id: number;


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this
        this.logo = null
        this.name = FiguresName.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell): boolean{
        if (target.figure?.color === this.color){
            return false
        }
        if(target.figure?.name === FiguresName.KING){
            return false
        }
        return true;
    }

    moveFigure(target: Cell): boolean{
        return true;
    }
}