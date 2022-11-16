import React from 'react';
import './main.css'
import {Search} from "../../widgets/search/search";
import {Cards} from "../../widgets/cards/cards";
import {useDispatch, useSelector} from "react-redux";
import {searchWetaher} from '../../state/cardsSlice';
import {useSearch} from "./hooks";
import {LoadingRing} from "../../shared/ui/loading-ring/loading-ring";

export const Main = () => {
    let lt = useSearch("",{isEmpty: true, isWrongLatitude: true })
    let ln = useSearch("",{isEmpty: true, isWrongLongitude: true })
    const {status,error} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(searchWetaher({lat:lt.val,lon:ln.val}))
        lt.resetInput()
        ln.resetInput()
    }
    return (
        <div className="main">
            {error ? <div className="error-tab">Fetch Failed</div> : null}
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                        {(lt.inputWrong && lt.emptyError.isError) && <div style={{color:"red"}}>{lt.emptyError.errorMessage}</div>}
                        {(lt.inputWrong && lt.wrongLatitude.isError) && <div style={{color:"red"}}>{lt.wrongLatitude.errorMessage}</div>}
                    <Search cord={lt.val} setCord={lt.onChange} placeHolder="Широта" blurHand={lt.onBlur}/>
                        {(ln.inputWrong && ln.emptyError.isError) &&
                            <div style={{color:"red"}}>{ln.emptyError.errorMessage}</div>}
                        {(ln.inputWrong && ln.wrongLongitude.isError) &&
                            <div style={{color:"red"}}>{ln.wrongLongitude.errorMessage}</div>}
                    <Search cord={ln.val} setCord={ln.onChange} placeHolder="Долгота" blurHand={ln.onBlur}/>
                        {status === "loading" ? <LoadingRing/> : <button disabled={!lt.validInput || !ln.validInput}
                                 className="button"
                                 type="submit"
                                 onClick={addItem}>Найти
                        </button>}
                    </div>
            </div>
            <Cards/>
        </div>
    );
};
