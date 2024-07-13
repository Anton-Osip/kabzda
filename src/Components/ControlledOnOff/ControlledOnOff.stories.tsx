import {useState} from "react";
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from '@storybook/addon-actions'

export default {title: 'OnOff stories', component: ControlledOnOff}

export const On = () => <ControlledOnOff onOff = {true} setOnOff = {action('Clicked')}/>
export const Off = () => <ControlledOnOff onOff = {false} setOnOff = {action('Clicked')}/>

export const ChangeRating = () => {
    const [onOff, setOnOff] = useState<boolean>(false)

    return <ControlledOnOff onOff = {onOff} setOnOff = {setOnOff}/>
}