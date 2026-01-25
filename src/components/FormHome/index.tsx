import { PlayCircleIcon } from 'lucide-react';
import { ButtonDefault } from '../ButtonDefault';
import { Cycles } from '../Cycles';
import { InputDefault } from '../InputDefault';
import style from './style.module.css';


export function FormHome() {

  return (
    <form className={style.form} action='#'>
      <div className={style.formRow}>
        <InputDefault
          label='task'
          type='text'
          id='task'
          placeholder='Digite algo...'
        />
      </div>

      <div className={style.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={style.formRow}>
        <Cycles />
      </div>

      <div className={style.formRow}>
        <ButtonDefault color='green' >
          <PlayCircleIcon />
        </ButtonDefault>
      </div>
    </form>
  );
}