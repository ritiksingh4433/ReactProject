import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
// 	method: 'GET',
// 	hostname: 'article-extractor-and-summarizer.p.rapidapi.com',
// 	port: null,
// 	path: '/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2',
// 	headers: {
// 		'x-rapidapi-key': 'ef7807d580msh4ecc0769a417cc3p1518e6jsn27aea8570c83',
// 		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
// 	}
// };

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;
