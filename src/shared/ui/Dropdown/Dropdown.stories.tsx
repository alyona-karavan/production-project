import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items = [
    { content: 'Первый пункт', onClick: () => console.log('Первый пункт') },
    { content: 'Второй пункт', href: 'https://example.com' },
    { content: 'Третий пункт', disabled: true },
];

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Открыть меню</Button>,
    items,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>Открыть меню</Button>,
    items,
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Открыть меню</Button>,
    items,
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Открыть меню</Button>,
    items,
    direction: 'bottom left',
};
