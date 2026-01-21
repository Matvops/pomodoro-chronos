import type React from "react";

import style from './style.module.css';

type InputDefaultProps = {
  label?: string,
  type: 'text' | 'number',
  id: string
} & React.ComponentProps<'input'>;

export function InputDefault({label, type, id, ...props}: InputDefaultProps) {


  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} className={style.input} {...props} />
    </>
  );
}