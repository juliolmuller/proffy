import { type JSX } from 'react';

import styles from './styles.module.scss';

type TextAreaProps = {
  label: string;
  name: string;
} & JSX.IntrinsicElements['textarea'];

function TextArea({ name, label, ...attr }: TextAreaProps) {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...attr} />
    </div>
  );
}

export default TextArea;
