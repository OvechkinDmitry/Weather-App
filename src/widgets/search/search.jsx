import React from 'react';
import './search.css'

export const Search = ({cord, setCord, placeHolder, blurHand}) => {
     // const searchChangeHandler = (e) => {
     //    setCord(e.target.value)
     // }
     const cordWrong ={

     }
     const cordError ={

     }
    return (<div>
        <input className="input"
               type="text"
               placeholder={placeHolder}
               value={cord}
               onChange={setCord}
               // onChange={searchChangeHandler}
               onBlur={blurHand}
        />
    </div>)
};
