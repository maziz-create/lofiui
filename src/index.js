import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, text }) => {
  return <button className={type ? styles[type] : styles.btn}>{text}</button>
}
