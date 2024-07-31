import type {Meta, StoryObj} from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion'
import React from "react";

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

export const UncontrolledAccordionExample = () => {
    return <UncontrolledAccordion  title={'UncontrolledAccordion'}/>
};

