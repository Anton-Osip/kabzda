import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React from "react";
import {itemInitial} from "../../App";
import {Select} from "./Select";
import {ItemType} from "../Accordion/Accordion";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

// export const FirsStory: Story = {
//     args: {
//         // title: 'firsStory',
//         // collapsed: true,
//         // items: itemInitial
//     },
// }

// const onClickCallback = action('Some Item was clicked');

// export const CollapsedSelect = () => {
//     return <Select/>
//
// };
//
// export const OpenedSelect = () => {
//     return <Select/>
//
// };


export const SelectDemo = () => {
    const itemInitial: ItemType[] = [
        {title: 'Minsk', value: 'Yana1'},
        {title: 'Moscow', value: 'Anton2'},
        {title: 'Grodno', value: 'Katya3'},
        {title: 'Gomel', value: 'Sasha4'},
        {title: 'Kiev', value: 'Roma5'}
    ]
    const [collapsed, setCollapsed] = React.useState(false);
    const [selectValue, setSelectValue] = React.useState<string | undefined>(undefined)

    const changeCollapsed = () => {
        setCollapsed(prev => !prev)
    }
    const changeSelectValue = (value: any) => {
        const title = itemInitial.filter(i => i.value === value)[0].title
        setSelectValue(title)
        setCollapsed(false)
    }

    return <Select changeSelectValue = {changeSelectValue}
                   changeCollapsed = {changeCollapsed} collapsed = {collapsed}
                   selectValue = {selectValue}
                   options = {itemInitial}/>

};