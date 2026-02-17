import { useContext } from 'react';
import style from './style.module.css';
import { TaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';


export function Cycles() {

  const { task } = useContext(TaskContext);

  const titles = {
    work: 'Trabalho',
    rest: 'Desanso Longo',
    shortRest: 'Descanso curto',
  };

  const cycleSteps = Array.from({ length: task.currentCycle })

  const getCycleDots = () => {

    return cycleSteps.map((_, index) => {

      const nextCycle = getNextCycle(index);
      const nextCycleType = getNextCycleType(nextCycle);

      return <li key={index} className={`${style.cycle} ${style[nextCycleType]}`} title={titles[nextCycleType]} aria-label={titles[nextCycleType]}></li>

    });
  };

  return (
    <>
      <div className={style.container}>
        <p>Ciclos:</p>
        <ul className={style.cycles}>
          {getCycleDots()}
        </ul>
      </div>
    </>
  );
}