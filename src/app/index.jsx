import React from "react";
import './app.css'
import {Header} from "../shared/Header/header";
import {Main} from "../pages/main/main";
import {Map} from "../pages/map/map";
import {Route, Routes} from "react-router-dom";
export const App = ({appState}) =>{
    return (
        //todo: валидация , обработка ошибок при фетчинге...(добавление компонент и тд.)

        <div className="app">
             <div className="app-container">
                 <Header/>
                 <Routes>
                     <Route path="/" element={<Main cardsData={appState.cardsData}/>}/>
                     <Route path="/map" element={<Map/>} />
                 </Routes>
             </div>
        </div>
    )
}