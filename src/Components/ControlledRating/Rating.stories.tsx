import {ControlledRating} from "./ControlledRating";
import {useState} from "react";
import {RatingValue} from "../../App";

export default {title: 'Rating stories', component: ControlledRating}

export const EmptyRating = () => <ControlledRating value = {0} onClick = {() => {
}}/>
export const Rating1 = () => <ControlledRating value = {1} onClick = {() => {
}}/>
export const Rating2 = () => <ControlledRating value = {2} onClick = {() => {
}}/>
export const Rating3 = () => <ControlledRating value = {3} onClick = {() => {
}}/>
export const Rating4 = () => <ControlledRating value = {4} onClick = {() => {
}}/>
export const Rating5 = () => <ControlledRating value = {5} onClick = {() => {
}}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValue>(0)

    return <ControlledRating value = {rating} onClick = {setRating}/>
}