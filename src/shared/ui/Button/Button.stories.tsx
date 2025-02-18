import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

interface ButtonStoryProps {
    className?: string;
    theme?: ThemeButton;
    children?: string;
}

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        className: { control: 'text' },
        theme: { control: 'select', options: Object.values(ThemeButton) },
        children: { control: 'text' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
    { className, theme, children }: ButtonStoryProps,
) => (
    <Button className={className} theme={theme}>
        {children}
    </Button>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
