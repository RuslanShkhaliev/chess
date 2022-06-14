import blackLogo from '../../assets/images/black-pawn.png'
import whiteLogo from '../../assets/images/white-pawn.png'
import { CellItem } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Pawn extends Figure {
  constructor(color: Colors, cell: CellItem) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.PAWN
  }
}
