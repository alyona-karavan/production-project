import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const CreatePage = Template.bind({});
CreatePage.args = {
    className: '',
};

export const EditPage = Template.bind({});
EditPage.args = {
    className: '',
};
EditPage.parameters = {
    reactRouter: {
        routePath: '/articles/:id/edit',
        routeParams: { id: '1' },
    },
};
