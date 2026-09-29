import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: API_KEY,
    pageSize: 20,
  },
})

export const getTopHeadlines = async () => {
  const response = await newsApi.get('/everything', {
    params: {
      q: 'India',
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: 20,
    },
  })

  return response.data.articles
}

export const searchNews = async (query) => {
  const response = await newsApi.get('/everything', {
    params: {
      q: query,
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: 20,
    },
  })

  return response.data.articles
}
export const searchCategoryNews = async (category) => {
  const response = await newsApi.get('/everything', {
    params: {
      q: category,
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: 20,
    },
  })

  return response.data.articles
}