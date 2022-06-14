/*
 Created by Ruslan on 12.06.2022 (morehome@mail.ru)
 */
import React, { FC } from 'react'
import { ChessBoard } from '../../models/ChessBoard'
import Cell from '../Cell'
import styles from './index.module.css'

interface BoardProps {
  board: ChessBoard
  setBoard: (board: ChessBoard) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => (
  <div className={styles.board}>
    {board.cells.map((row, index) => (
      <React.Fragment key={index}>
        {row.map((cell, index) => (
          <Cell key={index} cell={cell} className={cell.color} />
        ))}
      </React.Fragment>
    ))}
  </div>
)

export default BoardComponent
