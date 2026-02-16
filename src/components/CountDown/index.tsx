import { useContext } from "react";
import style from "./style.module.css";
import { TaskContext } from "../../contexts/TaskContext";


export function CountDown() {

  const { task } = useContext(TaskContext);

  return (
    <>
      <p className={style.countDown}>{ task.formattedSecondsRemaining }</p>
    </>
  );
}