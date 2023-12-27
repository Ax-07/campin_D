import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { tarifsApi } from '../services/api/tarifsApi';

export const store = configureStore({
    reducer: {
        [tarifsApi.reducerPath]: tarifsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tarifsApi.middleware),
    });

setupListeners(store.dispatch);