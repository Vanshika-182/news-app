function NewsItem({ article }) {
  return (
    <article className="news-card">

      <div className="news-image">
        <img
          src={
            article.urlToImage ||
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'
          }
          alt={article.title}
        />
      </div>

      <div className="news-content">

        <span className="news-category">
          {article.source?.name || 'NEWS'}
        </span>

        <h3>
          {article.title}
        </h3>

        <p>
          {article.description || 'Read the latest news and updates.'}
        </p>

        <div className="news-footer">

          <span className="date">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>

          <a
            className="read-more"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More →
          </a>

        </div>

      </div>

    </article>
  )
}

export default NewsItem