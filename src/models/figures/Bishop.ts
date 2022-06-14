import blackLogo from '../../assets/images/black-bishop.png'
import whiteLogo from '../../assets/images/white-bishop.png'
import { CellItem } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Bishop extends Figure {
  constructor(color: Colors, cell: CellItem) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.BISHOP
  }
}
