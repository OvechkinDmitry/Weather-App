import React from 'react';
import {useDispatch} from "react-redux";
import "./card.css"
import {deleteCard} from "../../state/cardsSlice";

export const Card = ({title, deg, id}) => {
    let dispatch = useDispatch();
    return (<div className="card-container">
            <div className="card-title">{title} страна</div>
            <div className="card-info">
                <div className="card-info__column">
                    <div className="card-temperatur">Температура: {deg}°C</div>
                    <div className="card-feels-like">Ощущается как: 110°C</div>
                    <div className="card-wind">Скорость ветра: m/s</div>
                </div>
                <div className="card-info__column">
                    <div className="card-visibility">Видимость: 1000м</div>
                    <div className="card-weather-main">Сейчас: солнечно</div>
                    <div className="card-cloudiness">Облачность: %</div>
                </div>
            </div>
            {/*<div className="card-temperature">{deg}°C</div>*/}
            <button onClick={() => dispatch(deleteCard({id}))} type="submit">DELETE</button>
        </div>
    )
}


