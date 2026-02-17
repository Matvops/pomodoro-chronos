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
import { parseSecondsToMinutes } from '../../utils/parseSecondsToMinutes';


export function FormHome() {

  const [taskName, setTaskName] = useState('');
  const { task, setTask } = useContext(TaskContext);
  
  const nextCycle = getNextCycle(task.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(!taskName) return;

    const taskNameClean = taskName.trim();

    if(!taskNameClean) {
      alert('Digite a task')
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

    setTask(prevState => {
      return {
        ...prevState,
        activeTask: newTask,  
        currentCycle: nextCycle,
        secondsRemaining: newTask.durationInMinutes * 60,
        formattedSecondsRemaining: parseSecondsToMinutes(newTask.durationInMinutes * 60),
        tasks: [...prevState.tasks, newTask],
        config: {...prevState.config}
      }
    });
  }

  function handleInterruptTask(e: MouseEvent) {

    e.preventDefault();

    setTask(prevState => {

      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map(task => {

          if(task.id == prevState.activeTask?.id) {
            return {...task, interruptDate: Date.now()}
          }

          return task;
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className={style.form} action='#'>
      <div className={style.formRow}>
        <InputDefault
          label='task'
          type='text'
          id='task'
          placeholder='Digite algo...'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          disabled={!!task.activeTask}
        />
      </div>

      <div className={style.formRow}>
        <p>Próximo intervalo é de {task.config[nextCycleType]} minutos</p>
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
            <PlayCircleIcon/>
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