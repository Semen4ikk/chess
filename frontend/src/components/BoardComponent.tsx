import type {Board} from "../entities/Board.ts";
import {Fragment, useEffect, useState} from "react";
import {CellComponent} from "./CellComponent.tsx";
import type {Cell} from "../entities/Cell.ts";
import type {Player} from "../entities/Player.ts";

interface BoardComponentProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: ()=> void;

}


export function BoardComponent({board, setBoard, currentPlayer, swapPlayer}:BoardComponentProps) {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells()
    }, [selectedCell]);

    function click(cell: Cell) {
        if(selectedCell && selectedCell!== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer()
            setSelectedCell(null);
        }else{
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }

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
        <>
            <h2>Ход: {currentPlayer?.color}</h2>
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
        </>

    )
}