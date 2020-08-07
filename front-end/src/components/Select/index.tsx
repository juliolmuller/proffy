import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...attr }) => (
  <div className="select-group">
    <label htmlFor={name}>{label}</label>
    <select id={name} value="" {...attr}>
      <option value="" disabled hidden>Selecione...</option>
      { options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>) }
    </select>
  </div>
)

export default Select
