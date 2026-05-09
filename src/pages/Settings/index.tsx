import { SaveIcon } from 'lucide-react';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { InputDefault } from '../../components/InputDefault';
import { MainTemplate } from '../../templates/MainTemplate';
import style from './style.module.css';
import { useContext, useEffect, useRef } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';


export function Settings() {

  const { task, dispatch } = useContext(TaskContext);

  const workTimeInput = useRef<HTMLInputElement>(null);
  const restInput = useRef<HTMLInputElement>(null);
  const shortRestInput = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = Number(workTimeInput.current?.value);
    const rest = Number(restInput.current?.value);
    const shortRest = Number(shortRestInput.current?.value);

    showMessage.dismiss();
    if (isNaN(workTime) || isNaN(rest) || isNaN(shortRest)) {
      showMessage.error('Por favor, use apenas números.');
      return;
    }

    if (workTime < 1 || workTime > 90) {
      showMessage.warning('Digite apenas valores entre 1 e 90 para foco');
    }

    if (rest < 1 || rest > 60) {
      showMessage.warning('Digite apenas valores entre 1 e 60 para Descanso');
    }

    if (shortRest < 1 || shortRest > 30) {
      showMessage.warning('Digite apenas valores entre 1 e 60 para Descanso Curto');
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: workTime,
        rest: rest,
        shortRest: shortRest
      }
    });

    showMessage.success('Configurações salvas com sucesso.');
  }



  useEffect(() => {
    document.title = 'Settings';
  }, []);

  return (
    <MainTemplate>

      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p className={style.description}>Modifique as configurações para tempo de foco, descanso curto e descanso longo</p>
      </Container>


      <Container>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formRow}>
            <InputDefault
              type='number'
              id='work'
              label='Foco'
              ref={workTimeInput}
              defaultValue={task.config.work}
            />
          </div>

          <div className={style.formRow}>
            <InputDefault
              type='number'
              id='rest'
              label='Descanso'
              ref={restInput}
              defaultValue={task.config.rest}
            />
          </div>

          <div className={style.formRow}>
            <InputDefault
              type='number'
              id='shortRest'
              label='Desanso Curto'
              ref={shortRestInput}
              defaultValue={task.config.shortRest}
            />
          </div>

          <div className={style.formRow}>
            <ButtonDefault aria-label="Salvar" title='Salvar'>
              <SaveIcon />
            </ButtonDefault>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}