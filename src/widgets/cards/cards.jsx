import React from "react";
import {Card} from "../card/card";
import {useSelector} from "react-redux";

export const Cards = () =>{
    const cardsSelector = useSelector(state => state.cards.cards)
    const cards = cardsSelector.map((item)=>{
        const {title,deg,id,country,feelsLike,humidity,weatherDescription,windSpeed,visibility,imgUrl,lat,lon} = item;
        return (
            <Card key={id} id={id} title={title} deg={deg} visibility={visibility}
                  windSpeed={windSpeed} feelsLike={feelsLike}
                  humidity={humidity} weatherDescription={weatherDescription} country={country} imgUrl={imgUrl}
                  lat={lat} lon={lon}
            />
        )
    })
    return (<div className="cards">
        {cards}
    </div>)
}