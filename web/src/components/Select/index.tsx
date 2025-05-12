import { type SelectHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type SelectProps = {
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

function Select({ name, label, options, ...attr }: SelectProps) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...attr}>
        <option value="" disabled hidden>
          Selecione...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
