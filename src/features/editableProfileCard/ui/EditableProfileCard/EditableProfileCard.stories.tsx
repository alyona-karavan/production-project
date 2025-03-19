import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from '@/entities/Profile';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const profile: Profile = {
    id: '1',
    first: 'Иван',
    lastname: 'Иванов',
    age: 30,
    currency: 'RUB',
    country: 'Russia',
    city: 'Москва',
    username: 'ivanov',
    avatar: 'https://example.com/avatar.jpg',
} as Profile;

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({
    profile: {
        form: profile,
    },
})];

export const EditMode = Template.bind({});
EditMode.args = {
    id: '1',
};
EditMode.decorators = [StoreDecorator({
    profile: {
        form: profile,
        readonly: false,
    },
})];

export const Loading = Template.bind({});
Loading.args = {
    id: '1',
};
Loading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {
    id: '1',
};
Error.decorators = [StoreDecorator({
    profile: {
        error: 'Ошибка при загрузке профиля',
    },
})];
