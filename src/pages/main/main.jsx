import React, {useState} from 'react';
import './main.css'
import {Card} from "../../widgets/card/card";
import {Search} from "../../widgets/search/search";
import {Cards} from "../../widgets/cards/cards";
// units=metric для отображения
export const Main = ({cardsData}) => {
    const [memory,setMemory] = useState({})
    const [lat,setLat] = useState("")
    const [lon,setLon] = useState("")
    let id = "21686de17220a1b3bc4c70e1e6d64a12";//проблема в ключе и url
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${id}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${id}`;

    const searchParams = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setMemory(data)
        setLon("")
        setLat("")
    }

    const cards = cardsData.map((item)=>{
        const {title, deg, ...itemProps} = item;
        return (
            <Card title={title} deg={deg}/>
        )
    })

    return (
        <div className="main">
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                    <Search cord={lat} setCord={setLat} placeHolder="Широта"/>
                    <Search cord={lon} setCord={setLon} placeHolder="Долгота"/>
                    <button className="button" type="submit" onClick={searchParams}>Submit</button>
                    </div>
            </div>
            <Cards cardsData={cardsData}/>
            {/*<div className="cards">*/}
            {/*    <Card title={memory?.name} deg={memory.main?.temp.toFixed()}/>*/}
            {/*    {cards}*/}
            {/*</div>*/}
        </div>
    );
};
