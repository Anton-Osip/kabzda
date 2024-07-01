import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {ControlledRating} from "./Components/ControlledRating/ControlledRating";
import {ControlledAccordion} from "./Components/ControlledAccordion/ControlledAccordion";
import {ControlledOnOff} from "./Components/ControlledOnOff/ControlledOnOff";

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValue>(0)

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const [onOff,setOn]=useState<boolean>(false)

    return (
        <div className = "App">
            <PageTitle title = {'This PageTitle'}/>
            <Accordion title = {'Menu'} collapsed = {true}/>
            <Accordion title = {'Users'} collapsed = {false}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>

            <OnOff/>

            <UncontrolledAccordion title = {'self controlled accordion'}/>
            <UncontrolledRating/>

            <ControlledRating value = {ratingValue} onClick={setRatingValue}/>
            <ControlledAccordion title={'sdfghfds'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <ControlledOnOff onOff={onOff} setOnOff={setOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>)
}

export default App;
