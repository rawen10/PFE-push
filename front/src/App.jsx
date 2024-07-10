import './App.css';
import figma from './assets/figma.png'
import Navbar from './layout/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";



function App({user}) {
  return (
    <div className="App" style={{background:"black"}}>
     <Navbar user={user} />
     <Outlet/>
    </div>
  );
}

export default App;
