import blackLogo from '../../assets/images/black-king.png'
import whiteLogo from '../../assets/images/white-king.png'
import { CellItem } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class King extends Figure {
  constructor(color: Colors, cell: CellItem) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }
}
