import styles from './styles.module.scss';

type TextAreaProps = JSX.IntrinsicElements['textarea'] & {
  name: string;
  label: string;
};

function TextArea({ name, label, ...attr }: TextAreaProps) {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...attr} />
    </div>
  );
}

export default TextArea;
