import style from './style.module.css';


export function Cycles() {

  return (
    <>
      <div className={style.container}>

        <p>Ciclos:</p>

        <ul className={style.cycles}>
          <li className={`${style.cycle} ${style.work}`}></li>
          <li className={`${style.cycle} ${style.shortRest}`}></li>
          <li className={`${style.cycle} ${style.work}`}></li>
          <li className={`${style.cycle} ${style.shortRest}`}></li>
          <li className={`${style.cycle} ${style.work}`}></li>
          <li className={`${style.cycle} ${style.shortRest}`}></li>
          <li className={`${style.cycle} ${style.work}`}></li>
          <li className={`${style.cycle} ${style.short}`}></li>
        </ul>
      </div>
    </>
  );
}