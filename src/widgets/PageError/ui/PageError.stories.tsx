import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

interface PageErrorStoryProps {
    className?: string;
}

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
        className: {
            control: 'text',
            description: 'Custom class name for the PageError component',
        },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = ({ className }: PageErrorStoryProps) => (
    <PageError className={className} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
