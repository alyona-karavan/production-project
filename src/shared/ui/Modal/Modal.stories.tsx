import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

interface ModalStoryProps {
    className?: string;
    children?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        className: { control: 'text' },
        children: { control: 'text' },
        isOpen: { control: 'boolean' },
        onClose: { control: 'void' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (
    {
        className,
        children,
        isOpen,
        onClose,
    }: ModalStoryProps,
) => (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
        {children}
    </Modal>
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
