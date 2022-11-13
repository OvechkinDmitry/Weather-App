import React from 'react';
import './search.css'

export const Search = ({cord, setCord, placeHolder, blurHand}) => {
    return (<div>
        <input className="input"
               type="text"
               placeholder={placeHolder}
               value={cord}
               onChange={setCord}
               onBlur={blurHand}
        />
    </div>)
};
