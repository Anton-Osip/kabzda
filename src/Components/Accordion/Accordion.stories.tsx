import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirsStory: Story = {
    args: {
        title: 'firsStory',
        collapsed: true
    },
}

export const CollapsedAccordion = () => {
    return <Accordion title = {'Collapsed accordion'} collapsed = {true}/>

};

export const OpenedAccordion = () => {
    return <Accordion title = {'Opened accordion'} collapsed = {false}/>
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <div onClick = {() => setCollapsed(!collapsed)}>
        <Accordion
            title = {'Opened accordion'}
            collapsed = {collapsed}/>
    </div>

};