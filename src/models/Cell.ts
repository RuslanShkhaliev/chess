import { Colors } from './Colors'
import { Figure } from './figures/Figure'

export class CellItem {
  readonly x: number

  readonly y: number

  readonly color: Colors

  figure: Figure | null

  // пометка для понимания может ли фигура попасть на ячейку
  available: boolean

  constructor(x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.available = false
  }
}
