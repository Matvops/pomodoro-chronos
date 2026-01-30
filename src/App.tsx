import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskModelState } from "./models/TaskModelState";

const initialState: TaskModelState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 25,
    rest: 15,
    shortRest: 5
  }
};

export function App() {

  const [state, setState] = useState<TaskModelState>(initialState);

  return (
    <>
      <Home
        state={state}
        setState={setState}
      />
    </>
  )

}