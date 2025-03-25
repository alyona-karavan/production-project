import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
