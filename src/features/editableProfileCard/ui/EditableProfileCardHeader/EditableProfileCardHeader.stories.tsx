import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const ViewMode = Template.bind({});
ViewMode.args = {};
ViewMode.decorators = [StoreDecorator({
    profile: {
        readonly: true,
    },
})];

export const EditMode = Template.bind({});
EditMode.args = {};
EditMode.decorators = [StoreDecorator({
    profile: {
        readonly: false,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    profile: {
        error: 'Ошибка при загрузке профиля',
    },
})];
