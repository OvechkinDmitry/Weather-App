import React, {useState} from 'react';
import './main.css'
import {Card} from "../../widgets/card/card";
import {Search} from "../../widgets/search/search";
// units=metric для отображения
export const Main = () => {
    const [memory,setMemory] = useState({})
    const [lat,setLat] = useState("")
    const [lon,setLon] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=21686de17220a1b3bc4c70e1e6d64a12`;
    const searchParams = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setMemory(data)
        console.log(data)
        setLon("")
        setLat("")
    }
    return (
        <div className="main">
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                    <Search cord={lat} setCord={setLat} placeHolder="Широта"/>
                    <Search cord={lon} setCord={setLon} placeHolder="Долгота"/>
                    <button className="button" type="submit" onClick={searchParams}>Submit</button>
            </div>
        </div>
         <div className="cards">
             <Card title={memory?.name} deg={memory.main?.temp.toFixed()}/>
         </div>
        </div>
    );
};
