import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tarifsApi = createApi({
    reducerPath: 'tarifsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/camping_D' }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => `/db/model.json`,
        }),
    }),
});

export const { useGetAllDataQuery } = tarifsApi;