import {useEffect, useState} from "react";

export const useValidation = (value, validations) =>{
    let lonTest = /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$/
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
        emptyError.isError || wrongLongitude.isError || wrongLatitude.isError ?
            setValidInput(false) : setValidInput(true)
    }, [emptyError,wrongLongitude,wrongLatitude])
    return {emptyError, wrongLongitude, wrongLatitude, validInput,}
}


export const useSearch = (initialValue, validations) => {// todo написать обнуление поиска (функцию) после кнопки добавить
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

const getErrorMessage = (conditions, message) =>{

}