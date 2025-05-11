import styles from './styles.module.scss';

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string;
  name: string;
};

function Input({ name, label, ...attr }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...attr} />
    </div>
  );
}

export default Input;
