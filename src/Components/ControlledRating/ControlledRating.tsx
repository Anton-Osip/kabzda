import React from "react";
import {Star} from "./Star/Star";
import {RatingValue} from "../../App";

type RatingProps = {
    value: RatingValue
    onClick: (value: RatingValue) => void;
}


export function ControlledRating(props: RatingProps) {
    return (
        <div>
            <Star selected = {props.value > 0} onClick = {props.onClick} value={1}/>
            <Star selected = {props.value > 1} onClick = {props.onClick} value={2}/>
            <Star selected = {props.value > 2} onClick = {props.onClick} value={3}/>
            <Star selected = {props.value > 3} onClick = {props.onClick} value={4}/>
            <Star selected = {props.value > 4} onClick = {props.onClick} value={5}/>
        </div>
    )

}