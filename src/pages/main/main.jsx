import React, {useState} from 'react';
import './main.css'
import {Card} from "../../widgets/card/card";

export const Main = () => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=21686de17220a1b3bc4c70e1e6d64a12`;
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
                    <input className="input"
                           type="text"
                           placeholder="Широта"
                           value={lat}
                           onChange={event => {setLat(event.target.value)}}
                    />
                    <input className="input"
                           type="text"
                           placeholder="Долгота"
                           value={lon}
                           onChange={event => {setLon(event.target.value)}}
                    />
                    <button className="button"
                            type="submit"
                            onClick={searchParams}
                    >Submit</button>
            </div>
        </div>
         <div className="cards">
             <Card title={memory?.name} deg={memory.main?.temp.toFixed()}/>
         </div>
        </div>
    );
};
