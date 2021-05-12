import { TextareaHTMLAttributes } from 'react'
import './styles.module.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

function TextArea({ name, label, ...attr }: TextAreaProps) {
  return (
    <div className="textarea-group">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...attr} />
    </div>
  )
}

export default TextArea
