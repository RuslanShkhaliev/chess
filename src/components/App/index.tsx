/*
 Created by Ruslan on 12.06.2022 (morehome@mail.ru)
 */
import React, { FC, useState } from 'react'
import { ChessBoard } from '../../models/ChessBoard'
import BoardComponent from '../Board'
import styles from './index.module.css'

const App: FC = () => {
  const [board, setBoard] = useState(new ChessBoard())

  const restart = () => {
    board.reset()
    setBoard(board)
  }

  return (
    <div className={styles.app}>
      <BoardComponent board={board} setBoard={restart} />
    </div>
  )
}

export default App
