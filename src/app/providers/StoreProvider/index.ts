import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export type {
    StateSchema, ReduxStoreWithManager, ThunkConfig, StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    AppDispatch,
};
