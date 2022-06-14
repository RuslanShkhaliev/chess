/*
 Created by Ruslan on 12.06.2022 (morehome@mail.ru)
 */

import cn from 'classnames'
import React, { FC } from 'react'
import { CellItem } from '../../models/Cell'
import styles from './index.module.css'

interface CellProps {
  className: 'white' | 'black'
  cell: CellItem
}

const Cell: FC<CellProps> = ({ className, cell }) => (
  <div className={cn(styles.cell, styles[className])}>
    {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
  </div>
)

export default Cell
