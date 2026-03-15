import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';
import { useEffect, useState, type MouseEvent } from 'react';
import { RouterLink } from '../RouterLink';

type Themes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<Themes>(() => {
    return localStorage.getItem('theme') == 'light' ? 'light' : 'dark';
  });

  const iconThemes = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };
  
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setTheme(prevElement => prevElement == 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

  }, [theme]);

  return (
    <>
      <nav className={style.menu}>
        <RouterLink path='/' className={style.menuLink} aria-label='home' title='home'><HomeIcon /></RouterLink>
        <RouterLink path='/' className={style.menuLink} aria-label='history' title='history'><HistoryIcon /></RouterLink>
        <RouterLink path='/' className={style.menuLink} aria-label='settings' title='settings'><SettingsIcon /></RouterLink>
        <a href="#" className={style.menuLink} onClick={handleClick} aria-label='alther theme' title='alther theme'>
          {iconThemes[theme]}
        </a>
      </nav>
    </>
  );
}