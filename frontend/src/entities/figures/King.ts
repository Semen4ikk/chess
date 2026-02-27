import {Figure, FiguresName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import type {Cell} from "../Cell.ts";
import blackLogo from "../../image/black-king.png";
import whiteLogo from "../../image/white-king.png";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color , cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresName.KING;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        return true;
    }
}