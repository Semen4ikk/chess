
import './App.css'
import {BoardComponent} from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./entities/Board.ts";

function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart()
    }, [])

    function restart(){
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard);
    }


  return (
    <>
        <BoardComponent board={board} setBoard={setBoard} />

    </>
  )
}

export default App
