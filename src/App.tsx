import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {SelfControlledAccordion} from "./Components/SelfContolledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./Components/SelfControlledRating/SelfControlledRating";

function App() {
    return (
        <div>
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

            <SelfControlledAccordion title = {'self controlled accordion'}/>
            <SelfControlledRating />
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
