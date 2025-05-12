import { type InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type InputProps = {
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ name, label, ...attr }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...attr} />
    </div>
  );
}

export default Input;
