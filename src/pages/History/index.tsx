import { TrashIcon } from "lucide-react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import style from './style.module.css';
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks } from "../../utils/sortTasks";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { showMessage } from "../../adapters/showMessage";

export function History() {

  const { task, dispatch } = useContext(TaskContext);

  const sortedTasks = sortTasks({field: 'startDate', direction: 'desc', tasks: task.tasks});

  const hasTasks = task.tasks.length > 0;

  const tipo = {
    work: 'Foco',
    rest: 'Descanso Longo',
    shortRest: 'Descanso',
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm('Tem certeza?', confirmation => {
      if(confirmation) dispatch({type: TaskActionTypes.RESET_TASK});
      return;
    })

  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            {hasTasks &&
              <span className={style.button}>
                <ButtonDefault color="red" aria-label="Apagar todo o histórico" title="Apagar histórico" onClick={handleResetHistory}>
                  <TrashIcon />
                </ButtonDefault>
              </span> 
            }
          </Heading>
        </Container>

        <Container>
          { hasTasks && 
            <div className={style.responsiveTable}>
              <table className={style.table}>
                <thead>
                  <tr className={style.row}>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTasks.map((t) => {
                    return (
                      <tr key={t.id} className={`${style.row} ${style.bodyRow}`}>
                        <td>{t.name}</td>
                        <td>{t.durationInMinutes} min</td>
                        <td>{formatDate(t.startDate)}</td>
                        <td>{getTaskStatus(t, task.activeTask)}</td>
                        <td>{tipo[t.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          }

          { !hasTasks &&
            <p className={style.emptyMessage}>Ainda não existem tarefas criadas.</p>
          }
        </Container>

      </MainTemplate>
    </>
  );
}