import React, { FC, TextareaHTMLAttributes } from 'react'
import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const TextArea: FC<TextAreaProps> = ({ name, label, ...attr }) => (
  <div className="textarea-group">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...attr} />
  </div>
)

export default TextArea
