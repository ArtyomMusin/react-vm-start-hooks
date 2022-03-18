import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from '../../common/divider'
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.focus()
        console.log(inputRef.current)
    }
    const handleClickWidth = () => {
        inputRef.current.style.width = '180px'
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref = {inputRef} type="email" className="form-control" id="email"/>
            <button className="btn btn-primary" onClick={handleClick}>focus input</button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину объекта</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
