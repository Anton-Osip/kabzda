import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React from "react";
import {itemInitial} from "../../App";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;
export type OptionType = {
    value: any,
    title: any
}
export const FirsStory: Story = {
    args: {
        title: 'firsStory',
        collapsed: true,
        items: itemInitial
    },
}

const onClickCallback = action('Some Item was clicked');

export const CollapsedAccordion = () => {
    return <Accordion onClick = {onClickCallback} items = {itemInitial} title = {'Collapsed accordion'}
                      collapsed = {true}/>

};

export const OpenedAccordion = () => {
    return <Accordion onClick = {onClickCallback} items = {itemInitial} title = {'Opened accordion'}
                      collapsed = {false}/>
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <div onClick = {() => setCollapsed(!collapsed)}>
        <Accordion
            onClick = {onClickCallback}
            items = {itemInitial}
            title = {'Opened accordion'}
            collapsed = {collapsed}/>
    </div>

};