import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

interface LoaderStoryProps {
    className?: string;
}

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
        className: {
            control: 'text',
            description: 'Custom class name for the Loader component',
        },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (
    {
        className,
    }: LoaderStoryProps,
) => (
    <Loader className={className} />
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
