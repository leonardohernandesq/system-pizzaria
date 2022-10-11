import styles from "./styles.module.scss";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: IInputProps) {
  return <input className={styles.input} {...rest} />;
}

export function TextArea({ ...rest }: ITextAreaProps) {
  return <textarea className={styles.input} {...rest}></textarea>;
}
