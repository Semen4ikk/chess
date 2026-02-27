import {Figure, FiguresName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import type {Cell} from "../Cell.ts";
import blackLogo from "../../image/black-knight.png";
import whiteLogo from "../../image/white-knight.png";
export class Knight extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color , cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresName.KHIGHT;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}