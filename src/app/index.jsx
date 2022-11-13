import React, {useState} from "react";
import './app.css'
import {Header} from "../shared/header/header";
import {Main} from "../pages/main/main";
import {Route, Routes} from "react-router-dom";
import {Modal} from "../shared/modal/modal";
export const App = () =>{
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className="app">
             <div className="app-container">
                 <Header/>
                 <Routes>
                     <Route path="/" element={<Main/>}/>
                 </Routes>
             </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal__title'>Добро пожаловать в Weather App!</div>
                <div className='modal__subtitle'>В приложении используется сервис Open Weather API,
                к сожалению, для его использования придется подключиться к VPN приношу свои извенения</div>
            </Modal>
        </div>
    )
}