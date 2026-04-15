import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { ButtonDefault } from '../ButtonDefault';
import { Cycles } from '../Cycles';
import { InputDefault } from '../InputDefault';
import style from './style.module.css';
import { useContext, useState, type FormEvent, type MouseEvent } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { TipsForCycles } from '../TipsForCycles';
import { showMessage } from '../../adapters/showMessage';


export function FormHome() {

  const [taskName, setTaskName] = useState<string|undefined>('');
  const { task, dispatch } = useContext(TaskContext);
  const lastTaskName = task.tasks.at(-1)?.name;

  const nextCycle = getNextCycle(task.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    showMessage.dismiss();

    if (!taskName) {
      showMessage.warn('Digite a task');
      return;
    }

    const taskNameClean = taskName.trim();

    if (!taskNameClean) {
      showMessage.warn('Digite a task');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationInMinutes: task.config[nextCycleType],
      type: nextCycleType
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
    showMessage.success('Task Criada');
  }

  function handleInterruptTask(e: MouseEvent) {

    e.preventDefault();

    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })

    showMessage.dismiss();
    showMessage.info('Task Interrompida');
  }

  return (
    <form onSubmit={handleSubmit} className={style.form} action='#'>
      <div className={style.formRow}>
        <InputDefault
          label='task'
          type='text'
          id='task'
          placeholder='Digite algo...'
          value={lastTaskName ?? taskName}
          onChange={e => setTaskName(e.target.value)}
          disabled={!!task.activeTask}
          autoComplete='off'
        />
      </div>

      <div className={style.formRow}>
        <TipsForCycles 
          nextCycleType={nextCycleType}
        />
      </div>

      {task.currentCycle > 0 && (
        <div className={style.formRow}>
          <Cycles />
        </div>
      )}

      <div className={style.formRow}>
        {!task.activeTask ? (
          <ButtonDefault
            key={1}
            color='green'
            aria-label='Iniciar tarefa'
            title='Iniciar tarefa'
            type='submit'
          >
            <PlayCircleIcon />
          </ButtonDefault>
        ) :
          (
            <ButtonDefault
              key={2}
              color='red'
              aria-label='Interromper a tarefa'
              title='Interromper tarefa'
              type='button'
              onClick={handleInterruptTask}
            >
              <StopCircleIcon />
            </ButtonDefault>
          )}
      </div>
    </form>
  );
}