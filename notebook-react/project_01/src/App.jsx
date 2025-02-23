/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Titulo from "./Titulo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <Titulo cor='red' />
      <Titulo cor='blue' />
      <Titulo cor='purple' />
      <Titulo cor='orangered' />
    </div>
  );
}

export default App;
