// import defaultImage from '../images/newsImage.jpg';
import newsImage from '../images/news.jpeg'

export const normalizeArticles = (data, source) => {
  const articles = {
    newsAPI: data.articles,
    guardian: data.response?.results,
    nyt: data.response?.docs,
    gnews: data.articles,
  }[source] || [];

  return articles.map((article) => ({
    title: article.title || article.webTitle || article.headline?.main,
    description:
      article.description ||
      article.fields?.trailText ||
      article.lead_paragraph ||
      'No description available',
    url: article.url || article.webUrl || article.web_url,
    source:
      article.source?.name ||
      article.fields?.publication ||
      article.source ||
      source,
    publishedAt:
      article.publishedAt ||
      article.webPublicationDate ||
      article.pub_date,
    author:
      article.author ||
      article.fields?.byline ||
      article.byline?.original ||
      'Unknown Author',
    category: article.category || article.sectionName || 'General',
    imgSrc: article.urlToImage || article.image || newsImage
  }));
};
