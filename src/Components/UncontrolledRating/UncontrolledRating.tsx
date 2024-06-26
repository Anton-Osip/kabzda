import {useCallback, useState} from "react";
import {Star} from "./Star/Star";

type RatingType = 0|1|2|3|4|5;

export function UncontrolledRating() {

    const [rating, setRating] = useState<RatingType>(0);

    const changeHandler = (value:RatingType)=>{
        setRating(value)
    }

    return (
        <div>
            <Star selected = {rating > 0} changeHandler={()=>changeHandler(1)}/>
            <Star selected = {rating > 1} changeHandler={()=>changeHandler(2)}/>
            <Star selected = {rating > 2} changeHandler={()=>changeHandler(3)}/>
            <Star selected = {rating > 3} changeHandler={()=>changeHandler(4)}/>
            <Star selected = {rating > 4} changeHandler={()=>changeHandler(5)}/>
        </div>
    )

}