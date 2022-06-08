import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from "./components/Navbaar";
import Home from "./components/Home"
import Register from "./components/Register";
import { Routes, Route } from 'react-router-dom';
import Edit from "./components/Edit";
import Details from "./components/Details";

import { useState } from "react";

const Dashboard = () => {
  return (
      <h1>Dashboard</h1>
  );
};

const Content = () => {
  return <h1>Content</h1>;
};

const Courses = () => {
  return <h1>Content/Cursos</h1>
};

const Videos = () => {
  return <h1>Content/Videos</h1>;
};

const Design = () => {
  return <h1>Design</h1>;
};

function App() {

  const [inactive, setInactive ] = useState(false)

  return (
    <>
      <Navbaar onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }} />

      <div className={`container-routes ${inactive ? "inactive" : ""}`}>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/edit/:id" element={<Edit />} />
            <Route exact path="/view/:id" element={<Details />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/content" element={<Content />} />
            <Route exact path="content/courses" element={<Courses />} />
            <Route exact path="content/videos" element={<Videos />} />
            <Route exact path="/design" element={<Design />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
