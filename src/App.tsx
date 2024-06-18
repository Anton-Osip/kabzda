import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This PageTitle'}/>
            <Accordion title={'Accordion Title'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

function PageTitle(props: {title: string}) {
    return (<h1>{props.title}</h1>)
}

export default App;
