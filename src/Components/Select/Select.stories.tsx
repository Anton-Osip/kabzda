import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React from "react";
import {Select} from "./Select";
import {ItemType} from "../Accordion/Accordion";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const BaseExampleWithValue = () => {
    const [value, setValue] = React.useState('1');
    return <Select value = {value} onChange = {setValue} items = {[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Grodno', value: '3'},
        {title: 'Gomel', value: '4'},
        {title: 'Kiev', value: '5'}
    ]}/>
};

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = React.useState(null);
    return <Select value = {value} onChange = {setValue} items = {[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Grodno', value: '3'},
        {title: 'Gomel', value: '4'},
        {title: 'Kiev', value: '5'}
    ]}/>
};