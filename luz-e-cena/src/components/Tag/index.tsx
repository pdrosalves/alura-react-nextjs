import React from 'react'
import styles from '../Tag.module.css'
import classNames from 'classnames'
import type { Categoria, Censura } from '../../types';

interface TagProps {
    value: Categoria | Censura;
}

const tagClasses = {
    Livre: styles.Livre,
    "10 anos": styles.Dez,
    "12 anos": styles.Doze,
    "14 anos": styles.Quatorze,
    "16 anos": styles.Sezes,
    "2D": styles.DoisD,
    "3D": styles.TresD,
}


const Tag = ({ value }: TagProps) => {
const classes = classNames(styles.tag, tagClasses[value]);
    return <span className={classes}>{value}</span>
}

export default Tag