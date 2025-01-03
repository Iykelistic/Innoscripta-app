import { useState, useEffect } from 'react';
import { fetchArticles } from '../api';

const useArticles = (sources, query, filters) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const allArticles = await Promise.all(
        sources.map((source) => fetchArticles(source, query, filters))
      );
      setArticles(allArticles.flat()); // Combine articles from all sources
      setLoading(false);
    };

    fetchData();
  }, [sources, query, filters]);

  return { articles, loading };
};

export default useArticles;
