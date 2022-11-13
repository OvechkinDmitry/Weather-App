import React from "react";
import './app.css'
import {Header} from "../shared/header/header";
import {Main} from "../pages/main/main";
import {Route, Routes} from "react-router-dom";
export const App = () =>{
    return (
        <div className="app">
             <div className="app-container">
                 <Header/>
                 <Routes>
                     <Route path="/" element={<Main/>}/>
                 </Routes>
             </div>
        </div>
    )
}