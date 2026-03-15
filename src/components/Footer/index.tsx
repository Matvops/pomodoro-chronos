import style from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {

  return (
    <>
      <footer className={style.footer}>
        <RouterLink path='/about'>Entenda a técnica pomodoro</RouterLink>
        <RouterLink path='/'>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com carinho</RouterLink>
      </footer>
    </>
  );
}