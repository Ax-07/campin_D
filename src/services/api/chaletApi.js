import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chaletApi = createApi({
    reducerPath: 'chaletApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/camping_D' }),
    endpoints: (builder) => ({
        getChalets: builder.query({
            query: () => `/db/descriptifChalet.json`,
        }),
    })
})

export const { useGetChaletsQuery } = chaletApi;


export const getDataChalets = async () => {
    try {
        const response = await fetch('./db/descriptifChalet.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}