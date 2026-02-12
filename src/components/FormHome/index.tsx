import { PlayCircleIcon } from 'lucide-react';
import { ButtonDefault } from '../ButtonDefault';
import { Cycles } from '../Cycles';
import { InputDefault } from '../InputDefault';
import style from './style.module.css';
import { useContext, useState, type FormEvent } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../../contexts/TaskContext';


export function FormHome() {

  const [taskName, setTaskName] = useState('');
  const { task, setTask } = useContext(TaskContext);


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
      durationInMinutes: 1,
      type: 'work'
    };

    setTask(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining: newTask.durationInMinutes * 60,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
        config: {...prevState.config}
      }
    });
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