import {useCallback, useState} from "react";
import {Star} from "./Star/Star";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating() {

    const [rating, setRating] = useState<RatingType>(0);

    const changeHandler = (value: RatingType) => {
        setRating(value)
    }

    return (
        <div>
            <Star selected = {rating > 0} changeHandler = {changeHandler} value = {1}/>
            <Star selected = {rating > 1} changeHandler = {changeHandler} value = {2}/>
            <Star selected = {rating > 2} changeHandler = {changeHandler} value = {3}/>
            <Star selected = {rating > 3} changeHandler = {changeHandler} value = {4}/>
            <Star selected = {rating > 4} changeHandler = {changeHandler} value = {5}/>
        </div>
    )

}