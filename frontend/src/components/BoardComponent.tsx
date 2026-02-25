import type {Board} from "../entities/Board.ts";
import {Fragment, useEffect, useState} from "react";
import {CellComponent} from "./CellComponent.tsx";
import type {Cell} from "../entities/Cell.ts";

interface BoardComponentProps {
    board: Board;
    setBoard: (board: Board) => void;

}


export function BoardComponent({board, setBoard}:BoardComponentProps) {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells()
    }, [selectedCell]);

    function click(cell: Cell) {
        if(selectedCell && selectedCell!== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }else{
            setSelectedCell(cell);
        }

    }



    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className="board">
            {board.cells.map((row, index)=>
                <Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </Fragment>

            )}

        </div>
    )
}