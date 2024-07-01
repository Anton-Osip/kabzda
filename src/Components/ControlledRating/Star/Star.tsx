import React from "react";
import {RatingValue} from "../../../App";

type StarPropsType = {
    selected: boolean
    value: RatingValue
    onClick: (value: RatingValue) => void;
}

const styles = {cursor: 'pointer', display: 'inline-block', marginRight: '5px'};
;

export function Star({selected, onClick, value}: StarPropsType) {
    return (
        <div style = {styles} onClick = {() => onClick(value)}>
            {selected ? <b>star </b> : 'star '}
        </div>
    )
}