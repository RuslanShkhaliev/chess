/*
 Created by Ruslan on 12.06.2022 (morehome@mail.ru)
 */
import React, { FC } from 'react';
import { cn } from '../../utils';
import styles from './index.module.css';

interface CellProps {
  className: 'white' | 'black';
}

const Cell: FC<CellProps> = ({ className }) => (
  <div className={cn(styles.cell, styles[className])} />
);

export default Cell;
