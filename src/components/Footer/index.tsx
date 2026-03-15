import { Link } from 'react-router';
import style from './style.module.css';

export function Footer() {

  return (
    <>
      <footer className={style.footer}>
        <Link to='/about'>Entenda a técnica pomodoro</Link>
        <Link to='/'>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com carinho</Link>
      </footer>
    </>
  );
}