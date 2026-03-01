import { useContext } from "react"
import { TaskContext } from "../../contexts/TaskContext"
import type { TaskModelState } from "../../models/TaskModelState";


type TipsForCyclesType = {
  nextCycleType: keyof TaskModelState['config'];
}

export function TipsForCycles({ nextCycleType }: TipsForCyclesType) {

  const { task } = useContext(TaskContext);

  const tipsForWhenTaskActive = {
    rest: `Descanso longo`,
    shortRest: `Descanse por ${task.config.shortRest} min`,
    work: `Foque por ${task.config.work} min`
  }

  const tipsForNoWhenTaskActive = {
    rest: `O próximo ciclo é um descanso longo`,
    shortRest: `No próximo ciclo, descanse por ${task.config.shortRest} min`,
    work: `No próximo ciclo, foque por ${task.config.work} min`
  }

  return (
    <span>{task.activeTask !== null ? tipsForWhenTaskActive[task.activeTask?.type] : tipsForNoWhenTaskActive[nextCycleType]}</span>

  )
}