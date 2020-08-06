import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const InputField: React.FC<InputFieldProps> = ({ name, label, ...attr }) => (
  <div className="input-group">
    <label htmlFor="{name}">{label}</label>
    <input id="{name}" {...attr} />
  </div>
)

export default InputField
