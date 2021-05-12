import { InputHTMLAttributes } from 'react'
import './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

function Input({ name, label, ...attr }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...attr} />
    </div>
  )
}

export default Input
