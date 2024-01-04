import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { tarifsApi } from '../services/api/tarifsApi';
import { chaletApi } from '../services/api/chaletApi';

export const store = configureStore({
    reducer: {
        [tarifsApi.reducerPath]: tarifsApi.reducer,
        [chaletApi.reducerPath]: chaletApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tarifsApi.middleware, chaletApi.middleware),
    });

setupListeners(store.dispatch);