import style from './style.module.css';

export function Footer() {

  return (
    <>
      <footer className={style.footer}>
        <a href="#">Entenda a técnica pomodoro</a>
        <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com carinho</a>
      </footer>
    </>
  );
}