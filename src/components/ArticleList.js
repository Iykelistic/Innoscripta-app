import React from 'react';

const ArticleList = ({ articles }) => {
  if (!articles.length) return <p className="text-center">No articles found.</p>;

  return (
    <div className="row">
      {articles.map((article, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src={article.imgSrc}
              className="card-img-top"
              alt={article.title}
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text text-truncate">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
