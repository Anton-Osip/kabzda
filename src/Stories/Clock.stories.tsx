import type {Meta, StoryObj} from '@storybook/react';
import {Clock} from "../Components/Clock";

const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
    parameters: {
        layout: 'centered',
    },
// This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

export default meta;
type Story = StoryObj<typeof Clock>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const DigitalClockStory: Story = {
    args: {mode: 'digital'}
}
export const AnalogClockStory: Story = {
    args: {mode: 'analog'}
}
