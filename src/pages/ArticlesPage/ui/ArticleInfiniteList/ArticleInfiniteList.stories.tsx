import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article, ArticleView } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

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

export const Normal = Template.bind({});
Normal.args = {
    className: '',
};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: article,
            2: { ...article, id: '2' },
            3: { ...article, id: '3' },
        },
        ids: ['1', '2', '3'],
        view: ArticleView.SMALL,
    },
})];

export const Loading = Template.bind({});
Loading.args = {
    className: '',
};
Loading.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: true,
        view: ArticleView.SMALL,
    },
})];

export const Empty = Template.bind({});
Empty.args = {
    className: '',
};
Empty.decorators = [StoreDecorator({
    articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
    },
})];

export const Error = Template.bind({});
Error.args = {
    className: '',
};
Error.decorators = [StoreDecorator({
    articlesPage: {
        error: 'Ошибка при загрузке статей',
        view: ArticleView.SMALL,
    },
})];
