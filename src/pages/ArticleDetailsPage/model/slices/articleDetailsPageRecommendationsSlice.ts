import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendatiosAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleReccommendations = recommendatiosAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendatiosAdapter.getInitialState(),
);

const articleDetailsPageRecommenndationsSlice = createSlice({
    name: 'articleDetailsPageRecommenndationsSlice',
    initialState: recommendatiosAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendatiosAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecommenndationsReducer } = articleDetailsPageRecommenndationsSlice;
