import {Figure, FiguresName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import type {Cell} from "../Cell.ts";
import blackLogo from "../../image/black-queen.png";
import whiteLogo from "../../image/white-queen.png";

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color , cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresName.QUEEN;
    }
}