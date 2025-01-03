import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';
import useArticles from '../hooks/useArticles';
import { sources as availableSources } from '../api/sources';

const Home = () => {
  const [filters, setFilters] = useState({});
  const [selectedSources, setSelectedSources] = useState(
    availableSources.map((source) => source.key)
  );
  const { articles, loading } = useArticles(selectedSources, filters.query, filters);

  const handleSearch = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSourceChange = (sourceKey) => {
    setSelectedSources((prev) =>
      prev.includes(sourceKey)
        ? prev.filter((key) => key !== sourceKey)
        : [...prev, sourceKey]
    );
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">News Aggregator</h1>
      <div className="row mb-4">
        <div className="col-lg-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="col-lg-4">
          <h5>Sources</h5>
          <div className="d-flex flex-wrap">
            {availableSources.map((source) => (
              <div key={source.key} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={source.key}
                  checked={selectedSources.includes(source.key)}
                  onChange={() => handleSourceChange(source.key)}
                />
                <label className="form-check-label" htmlFor={source.key}>
                  {source.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;
