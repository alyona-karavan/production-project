import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

describe('articleDetailsSlice', () => {
    const initialState: ArticleDetailsSchema = {
        isLoading: false,
        error: undefined,
        data: undefined,
    };

    it('should handle initial state', () => {
        expect(articleDetailsReducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('should handle fetchArticleById.pending', () => {
        const action = { type: fetchArticleById.pending.type };
        const state = articleDetailsReducer(initialState, action);
        expect(state).toEqual({ ...initialState, isLoading: true });
    });

    it('should handle fetchArticleById.fulfilled', () => {
        const article = { id: '1', title: 'Test Article' }; // Пример статьи
        const action = { type: fetchArticleById.fulfilled.type, payload: article };
        const state = articleDetailsReducer(initialState, action);
        expect(state).toEqual({ isLoading: false, error: undefined, data: article });
    });

    it('should handle fetchArticleById.rejected', () => {
        const action = { type: fetchArticleById.rejected.type, payload: 'error' };
        const state = articleDetailsReducer(initialState, action);
        expect(state).toEqual({ isLoading: false, error: 'error', data: undefined });
    });
});
