import React from 'react';
import {useDispatch} from "react-redux";
import "./card.css"
import {deleteCard} from "../../state/cardsSlice";
import {CardMap} from "../../shared/map/map";

export const Card = ({title, deg, id, country, feelsLike, humidity, weatherDescription, windSpeed,visibility,imgUrl,lat,lon}) => {
    let dispatch = useDispatch();
    return (
            <div className="card-body">
                <div className="card-container">
                    <div className="card-image"><img src={imgUrl} alt="weather"/></div>
                    <div className="card-title">{title} {country}</div>
                    <div className="card-info">
                        <div className="card-temperatur">Температура: {deg}°C</div>
                        <div className="card-feels-like">Ощущается как: {feelsLike}°C</div>
                        <div className="card-visibility">Видимость: {visibility}м</div>
                        <div className="card-wind">Скорость ветра: {windSpeed}m/s</div>
                        <div className="card-weather-main">Сейчас: {weatherDescription}</div>
                        <div className="card-cloudiness">Облачность: {humidity}%</div>
                    </div>
                    <button onClick={() => dispatch(deleteCard({id}))} type="submit">УДАЛИТЬ</button>
                </div>
                <CardMap lat={lat} lon={lon}/>
        </div>
    )
}


