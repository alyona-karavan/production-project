import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

interface ThemeSwitcherStoryProps {
    className?: string;
}

export default {
    title: 'wigets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
        className: {
            control: 'text',
            description: 'Custom class name for the ThemeSwitcher component',
        },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (
    {
        className,
    }: ThemeSwitcherStoryProps,
) => (
    <ThemeSwitcher className={className} />
);

export const Normal = Template.bind({});
Normal.args = {
    to: '/',
};

export const Dark = Template.bind({});
Dark.args = {
    to: '/',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
