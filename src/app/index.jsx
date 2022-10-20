import React from "react";
import './app.css'
import {Header} from "../widgets/Header/header";
import {Main} from "../pages/main/main";
export const App = () =>{
    return (
        <div className="app-container">
            <Header/>
            <Main/>
        </div>
    )
}