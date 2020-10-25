import React, { FC, InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: FC<InputProps> = ({ name, label, ...attr }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input id={name} {...attr} />
  </div>
)

export default Input
