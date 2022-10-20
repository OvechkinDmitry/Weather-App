import React from "react";
import './app.css'
import {Header} from "../widgets/Header/header";
import {Main} from "../pages/main/main";
import {Map} from "../pages/map/map";
import {Route, Routes} from "react-router-dom";
export const App = () =>{
    return (
        <div className="app-container">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/map" element={<Map/>} />
            </Routes>
        </div>
    )
}