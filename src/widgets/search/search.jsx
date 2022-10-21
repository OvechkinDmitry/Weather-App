import React from 'react';
import './search.css'

export const Search = ({cord, setCord, placeHolder }) => {

    return (<div>
        <input className="input"
               type="text"
               placeholder={placeHolder}
               value={cord}
               onChange={event => {setCord(event.target.value)}}
        />
    </div>)
};
