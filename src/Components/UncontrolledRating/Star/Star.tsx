import React from "react";
import {RatingType} from "../UncontrolledRating";

type StarPropsType = {
    selected: boolean
    changeHandler: (value: RatingType) => void
    value: RatingType
}

const styles = {cursor: 'pointer', display: 'inline-block', marginRight: '5px'};
;

export function Star({selected, changeHandler, value}: StarPropsType) {
    return (
        <div style = {styles} onClick = {() => changeHandler(value)}>
            {selected ? <b>star </b> : 'star '}
        </div>)
}