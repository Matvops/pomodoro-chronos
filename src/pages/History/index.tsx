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

export function History() {

  const { task } = useContext(TaskContext);

  const sortedTasks = sortTasks({field: 'startDate', direction: 'desc', tasks: task.tasks});

  const tipo = {
    work: 'Foco',
    rest: 'Descanso Longo',
    shortRest: 'Descanso',
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span className={style.button}>
              <ButtonDefault color="red" aria-label="Apagar todo o histórico" title="Apagar histórico">
                <TrashIcon />
              </ButtonDefault>
            </span>
          </Heading>
        </Container>

        <Container>
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
        </Container>

      </MainTemplate>
    </>
  );
}