import type { ComponentProps } from 'react';
import style from './style.module.css';
import type React from "react";

type ButtonDefaultProps = {
  children: React.ReactNode,
  color?: 'red' | 'green'
} & ComponentProps<'button'>

export function ButtonDefault({children, color = 'green', ...props}: ButtonDefaultProps) {


  return (
    <>
    <button className={`${style.button} ${style[color]}`} {...props}>
      {children}
    </button>
    </>
  );
}