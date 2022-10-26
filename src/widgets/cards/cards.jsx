import React from "react";
import {Card} from "../card/card";
import {useSelector} from "react-redux";

export const Cards = () =>{
    const cardsSelector = useSelector(state => state.cards.cards)
    const cards = cardsSelector.map((item)=>{
        const {title, deg, id, ...itemProps} = item;
        return (
            <Card key={id} id={id} title={title} deg={deg}/>
        )
    })
    return (<div className="cards">
        {/*<Card title={memory?.name} deg={memory.main?.temp.toFixed()}/>*/}
        <Card title={"Москва"} deg={10}/>
        <Card title={"Москва"} deg={10}/>
        {cards}
    </div>)
}