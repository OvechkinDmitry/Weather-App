import React from "react";
import './app.css'
import {Header} from "../widgets/Header/header";
import {Main} from "../pages/main/main";
import {Map} from "../pages/map/map";
import {Route, Routes} from "react-router-dom";
export const App = () =>{
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=21686de17220a1b3bc4c70e1e6d64a12`
    const lon = 10.99;
    const lat = 44.34;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=21686de17220a1b3bc4c70e1e6d64a12`;
    return (
        <div className="app">
             <div className="app-container">
                 <Header/>
                 <Routes>
                     <Route path="/" element={<Main/>}/>
                     <Route path="/map" element={<Map/>} />
                 </Routes>
             </div>
        </div>
    )
}