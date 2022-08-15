import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '60c08530d3msh7f98bf3fbe0269dp1e5414jsna63bd4870eaa',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const params = {safeSearch: 'Off', textFormat: 'Raw'}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeaders, params})

export const newsApi = createApi(
    {
        reducerPath: 'newsApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
            getNews: builder.query({
                //query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
                query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}`)
            })
        })
    }
)
 
export const { useGetNewsQuery } = newsApi