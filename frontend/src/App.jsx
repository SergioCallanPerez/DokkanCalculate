import {BrowserRouter, Routes, Route} from "react-router-dom"
import Mainpage from "./components/pages/Iniciar Sesion/MainPage"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
