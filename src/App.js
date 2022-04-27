import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from "./components/Navbaar";
import Home from "./components/Home"
import Register from "./components/Register";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbaar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
