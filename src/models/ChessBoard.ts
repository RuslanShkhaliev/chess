import { CellItem } from './Cell'
import { Colors } from './Colors'
import { Bishop } from './figures/Bishop'
import { King } from './figures/King'
import { Knight } from './figures/Knight'
import { Pawn } from './figures/Pawn'
import { Queen } from './figures/Queen'
import { Rook } from './figures/Rook'

export class ChessBoard {
  cells: CellItem[][] = []

  private BOARD_ROW_SIZE = 8

  constructor() {
    this.generateBoard()
  }

  public generateBoard() {
    for (let i = 0; i < this.BOARD_ROW_SIZE; i++) {
      const row = []
      for (let j = 0; j < this.BOARD_ROW_SIZE; j++) {
        if ((i + j) % 2) {
          row.push(new CellItem(j, i, Colors.BLACK, null))
        } else {
          row.push(new CellItem(j, i, Colors.WHITE, null))
        }
      }
      this.cells.push(row)
    }
    this.addFigures()
  }

  public reset() {
    this.cells = []
    this.generateBoard()
  }

  private getCell(x: number, y: number): CellItem {
    return this.cells[y][x]
  }

  private addPawns() {
    for (let i = 0; i < this.BOARD_ROW_SIZE; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1))
      new Pawn(Colors.WHITE, this.getCell(i, 6))
    }
  }

  private addQueens() {
    new Queen(Colors.WHITE, this.getCell(3, 7))
    new Queen(Colors.BLACK, this.getCell(3, 0))
  }

  private addKings() {
    new King(Colors.WHITE, this.getCell(4, 7))
    new King(Colors.BLACK, this.getCell(4, 0))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addRooks() {
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
  }

  private addBishops() {
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
  }

  addFigures() {
    this.addPawns()
    this.addQueens()
    this.addKings()
    this.addKnights()
    this.addRooks()
    this.addBishops()
  }
}
