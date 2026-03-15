import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessageContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPomodoro } from "./pages/AboutPomodoro";
import { NotFound } from "./pages/NotFound";


export function App() {

  return (
    <>
      <TaskContextProvider>
        <MessageContainer>
          <BrowserRouter>
            <Routes>

              <Route 
                path="/"
                element={<Home />}
              />

              <Route 
                path="/about"
                element={<AboutPomodoro />}
              />

              <Route 
                path="*"
                element={<NotFound />}
              />

            </Routes>
          </BrowserRouter>
        </MessageContainer>
      </TaskContextProvider>
    </>
  )

}