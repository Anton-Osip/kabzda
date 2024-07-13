
import {OnOff} from "./OnOff";

export default {title: 'UnControlledOnOff stories', component: OnOff}

export const On = () => <OnOff defaultsValue ={true}/>
export const Off = () => <OnOff defaultsValue ={false}/>

