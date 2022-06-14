import logo from '../../assets/images/black-king.png'
import { CellItem } from '../Cell'
import { Colors } from '../Colors'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors

  logo: typeof logo | null

  cell: CellItem

  name: FigureNames

  id: number

  constructor(color: Colors, cell: CellItem) {
    this.color = color
    this.logo = logo
    this.cell = cell
    this.cell.figure = this
    this.name = FigureNames.FIGURE
    this.id = Math.random()
    console.log(this.cell, 'This cell')
  }

  // eslint-disable-next-line class-methods-use-this
  canMove(target: CellItem): boolean {
    return true
  }

  // eslint-disable-next-line class-methods-use-this
  moveFigure() {}
}
