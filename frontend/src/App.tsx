
import './App.css'
import {BoardComponent} from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./entities/Board.ts";
import {Player} from "./entities/Player.ts";
import {Colors} from "./entities/Colors.ts";

function App() {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null);

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function swapPlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    function restart(){
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard);
    }


  return (
    <>
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />

    </>
  )
}

export default App
