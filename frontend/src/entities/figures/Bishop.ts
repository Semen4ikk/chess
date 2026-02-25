import {Figure, FiguresName} from "./Figure.ts";
import type {Cell} from "../Cell.ts";
import {Colors} from "../Colors.ts";
import blackLogo from '../../image/black-bishop.png'
import whiteLogo from '../../image/white-bishop.png'

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color , cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresName.BISHOP;
    }
}