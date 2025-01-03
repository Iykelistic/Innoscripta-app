import axios from 'axios';
import { normalizeArticles } from './normalize';

const API_KEYS = {
  newsAPI: process.env.REACT_APP_NEWSAPI_KEY,
  guardian: process.env.REACT_APP_GUARDIAN_KEY,
  nyt: process.env.REACT_APP_NYT_KEY,
  gnews: process.env.REACT_APP_GNEWS_KEY,
};
console.log(JSON.stringify(API_KEYS))
const API_URLS = {
  newsAPI: 'https://newsapi.org/v2',
  guardian: 'https://content.guardianapis.com',
  nyt: 'https://api.nytimes.com/svc/search/v2',
  gnews: 'https://gnews.io/api/v4',
};

const apiRequest = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    return null;
  }
};

export const fetchArticles = async (source, query, filters) => {
  const { category, date } = filters;
  let url;
  let params;

  console.log("Tried to fetch articles")
  switch (source) {
    case 'newsAPI':
      url = `${API_URLS.newsAPI}/${
        query ? 'everything' : 'top-headlines'
      }`;
      params = {
        apiKey: API_KEYS.newsAPI,
        q: query || undefined,
        category: category || undefined,
        from: date || undefined,
        country: 'us'
      };
      break;
    case 'guardian':
      url = `${API_URLS.guardian}/search`;
      params = {
        'api-key': API_KEYS.guardian,
        q: query || category || undefined,
        'from-date': date || undefined,
        'show-fields': 'all',
      };
      break;
    case 'nyt':
      url = `${API_URLS.nyt}/articlesearch.json`;
      params = {
        'api-key': API_KEYS.nyt,
        fq: query || undefined,
        category: category || undefined,
        begin_date: date ? date.replace(/-/g, '') : undefined,
      };
      break;
    case 'gnews':
      url = `${API_URLS.gnews}/top-headlines`;
      params = {
        apikey: API_KEYS.gnews,
        q: query || undefined,
        category: category || 'general',
        from: date || undefined,
      };
      break;
    default:
      return [];
  }

  const data = await apiRequest(url, params);
  return data ? normalizeArticles(data, source) : [];
};
