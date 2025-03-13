import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items = [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт' },
    { value: '3', content: 'Третий пункт', disabled: true },
    { value: '4', content: 'Четвертый пункт' },
];

export const Normal = Template.bind({});
Normal.args = {
    items,
    defaultValue: 'Выберите значение',
    onChange: (value: string) => console.log(value),
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    items,
    defaultValue: 'Выберите значение',
    onChange: (value: string) => console.log(value),
    label: 'Выберите пункт:',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    items,
    value: '1',
    onChange: (value: string) => console.log(value),
    readonly: true,
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    items,
    defaultValue: 'Выберите значение',
    onChange: (value: string) => console.log(value),
    direction: 'top',
};
