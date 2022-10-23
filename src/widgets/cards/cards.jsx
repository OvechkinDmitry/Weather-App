import React from "react";
import {Card} from "../card/card";

export const Cards = ({cardsData}) =>{
    const cards = cardsData.map((item)=>{
        const {title, deg, ...itemProps} = item;
        return (
            <Card title={title} deg={deg}/>
        )
    })
    return (<div className="cards">
        {/*<Card title={memory?.name} deg={memory.main?.temp.toFixed()}/>*/}
        {cards}
    </div>)
}