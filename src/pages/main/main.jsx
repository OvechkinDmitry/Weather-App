import React from 'react';
import './main.css'

export const Main = () => {
    return (
        <div className="main">
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                    <input className="input" type="text" placeholder="широта"/>
                    <input className="input" type="text" placeholder="долгота"/>
                    <button className="button" type="submit">Submit</button>
            </div>

        </div>
        </div>
    );
};
