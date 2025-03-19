import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

const article: Article = {
    id: '1',
    title: 'Заголовок статьи',
    subtitle: 'Подзаголовок статьи',
    img: 'https://example.com/image.jpg',
    views: 100,
    createdAt: '01.01.2023',
    type: [],
    blocks: [],
    user: {
        id: '1',
        username: 'admin',
    },
};

export const CanEdit = Template.bind({});
CanEdit.args = {
    className: '',
};
CanEdit.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];

export const CannotEdit = Template.bind({});
CannotEdit.args = {
    className: '',
};
CannotEdit.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
    user: {
        authData: {
            id: '2',
            username: 'user',
        },
    },
})];
