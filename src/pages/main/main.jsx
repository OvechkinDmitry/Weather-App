import React, {useState} from 'react';
import './main.css'
import {Search} from "../../widgets/search/search";
import {Cards} from "../../widgets/cards/cards";
import {useDispatch} from "react-redux";
import {searchWetaher} from '../../state/cardsSlice'

export const Main = () => {
    const [lat,setLat] = useState("")
    const [lon,setLon] = useState("")
    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(searchWetaher({lat,lon}))
        setLon("")
        setLat("")
    }
    return (
        <div className="main">
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                    <Search cord={lat} setCord={setLat} placeHolder="Широта"/>
                    <Search cord={lon} setCord={setLon} placeHolder="Долгота"/>
                    <button className="button" type="submit" onClick={addItem}>Найти</button>
                    </div>
            </div>
            <Cards/>
        </div>
    );
};
