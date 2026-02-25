import {Figure, FiguresName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import type {Cell} from "../Cell.ts";
import blackLogo from "../../image/black-rook.png";
import whiteLogo from "../../image/white-rook.png";

export class Rook extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color , cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresName.ROOK;
    }
}