import React from "react";

type StarPropsType = {
    selected: boolean
    changeHandler: () => void
}

const styles = {cursor: 'pointer', display: 'inline-block',marginRight: '5px'};
;

export function Star({selected, changeHandler}: StarPropsType) {
    return (
        <div style = {styles} onClick = {() => changeHandler()}>
            {selected ? <b>star </b> : 'star '}
        </div>)
}