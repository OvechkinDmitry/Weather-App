import React, {useEffect, useState} from 'react';
import './main.css'
import {Search} from "../../widgets/search/search";
import {Cards} from "../../widgets/cards/cards";
import {useDispatch} from "react-redux";
import {searchWetaher} from '../../state/cardsSlice';
const useValidation = (value, validations) =>{
    // let lonTest = /^(\s?)+(\-?([1]?[0-7]?[0-9](\.\d+)?|180((.[0]+)?)))$/g
    let lonTest = /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$/
    // let latTest = /^(\-?([0-8]?[0-9](\.\d+)?|90(.[0]+)?)\s?)$/g
    let latTest = /^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})?$/
    const [emptyError, setEmptyError] = useState({isError : true, errorMessage : ""})
    const [wrongLongitude, setWrongLongitude] = useState({isError : false, errorMessage : ""})
    const [wrongLatitude, setWrongLatitude] = useState({isError : false, errorMessage : ""})
    const [validInput, setValidInput]  = useState(false)
    useEffect(()=>{
        for(let validation in validations){
            switch (validation){
                case "isEmpty":
                    value ? setEmptyError( {isError: false, errorMessage: ""})
                        :setEmptyError({isError: true, errorMessage: "Поле пусто"})
                    break
                case "isWrongLongitude":
                    !lonTest.test(value) ? setWrongLongitude({isError: true, errorMessage: "Неверная долгота"}):
                        setWrongLongitude({isError: false, errorMessage: ""})
                    break;
                case "isWrongLatitude":
                    !latTest.test(value) ? setWrongLatitude({isError: true, errorMessage: "Неверная широта"}):
                        setWrongLatitude({isError: false, errorMessage: ""})
                    break;
            }
        }
    },[value])
    useEffect(()=>{
        if(emptyError.isError || wrongLongitude.isError || wrongLatitude.isError)
            setValidInput(false)
        else
            setValidInput(true)
    }, [emptyError,wrongLongitude,wrongLatitude])
    return {
        emptyError,
        wrongLongitude,
        wrongLatitude,
        validInput,
    }
}


const useSearch = (initialValue, validations) => {// todo написать обнуление поиска (функцию) после кнопки добавить
    const [val,setVal] = useState(initialValue)
    const [inputWrong, setInputWrong] = useState(false)
    const valid = useValidation(val, validations)
    const onChange= (e) => setVal(e.target.value)
    const onBlur = (e) => setInputWrong(true)
    const resetInput = () => {
        setInputWrong(false)
        setVal("")
    }
    return {val, onBlur, onChange, setVal, ...valid, inputWrong, resetInput,}
}
export const Main = () => {
    let lt = useSearch("",{isEmpty: true, isWrongLatitude: true })
    let ln = useSearch("",{isEmpty: true, isWrongLongitude: true })
    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(searchWetaher({lat:lt.val,lon:ln.val}))
        lt.resetInput()
        ln.resetInput()
    }
    return (
        <div className="main">
            <div className="main__form">
                    <div className="form"><div className="form__title">Введите координаты</div>
                        {(lt.inputWrong && lt.emptyError.isError) && <div style={{color:"red"}}>{lt.emptyError.errorMessage}</div>}
                        {(lt.inputWrong && lt.wrongLatitude.isError) && <div style={{color:"red"}}>{lt.wrongLatitude.errorMessage}</div>}
                    <Search cord={lt.val}
                            setCord={lt.onChange}
                            placeHolder="Широта"
                            blurHand={lt.onBlur}
                    />
                        {(ln.inputWrong && ln.emptyError.isError) &&
                            <div style={{color:"red"}}>{ln.emptyError.errorMessage}</div>}
                        {(ln.inputWrong && ln.wrongLongitude.isError) &&
                            <div style={{color:"red"}}>{ln.wrongLongitude.errorMessage}</div>}
                    <Search cord={ln.val}
                            setCord={ln.onChange}
                            placeHolder="Долгота"
                            blurHand={ln.onBlur}
                    />
                    <button disabled={!lt.validInput || !ln.validInput} className="button" type="submit" onClick={addItem}>Найти</button>
                    </div>
            </div>
            <Cards/>
        </div>
    );
};
