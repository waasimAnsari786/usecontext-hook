import "./App.css";
import ParentComp from "./components/ParentComp";
import { MainContextProvider } from "./context/MainContextProvider";

function App() {
  return (
    <>
      <MainContextProvider>
        <ParentComp />
      </MainContextProvider>
    </>
  );
}

export default App;
