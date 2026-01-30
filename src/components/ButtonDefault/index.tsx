import style from './style.module.css';
import type React from "react";

type ButtonDefaultProps = {
  children: React.ReactNode,
  color?: 'red' | 'green'
}

export function ButtonDefault({children, color = 'green'}: ButtonDefaultProps) {


  return (
    <>
    <button className={`${style.button} ${style[color]}`}>
      {children}
    </button>
    </>
  );
}