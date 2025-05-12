import { type JSX } from 'react';

import styles from './styles.module.scss';

type InputProps = {
  label: string;
  name: string;
} & JSX.IntrinsicElements['input'];

function Input({ name, label, ...attr }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...attr} />
    </div>
  );
}

export default Input;
