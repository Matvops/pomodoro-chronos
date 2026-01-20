import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';

export function Menu() {

  return (
    <>
      <nav className={style.menu}>
        <a href="#" className={style.menuLink}><HomeIcon /></a>
        <a href="#" className={style.menuLink}><HistoryIcon /></a>
        <a href="#" className={style.menuLink}><SettingsIcon /></a>
        <a href="#" className={style.menuLink}><SunIcon /></a>
      </nav>
    </>
  );
}