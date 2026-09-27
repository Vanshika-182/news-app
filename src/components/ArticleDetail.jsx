import { useLocation, useNavigate } from 'react-router-dom'

function ArticleDetail() {
  const location = useLocation()
  const navigate = useNavigate()

  const article = location.state?.article

  if (!article) {
    return (
      <main className="article-detail">
        <h2>Article not found</h2>
        <button onClick={() => navigate('/')}>
          Back to Home
        </button>
      </main>
    )
  }

  return (
    <main className="article-detail">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <article className="article-container">
        <span className="article-source">
          {article.source?.name || 'NEWS'}
        </span>

        <h1>{article.title}</h1>

        <p className="article-date">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        <img
          className="article-image"
          src={
            article.urlToImage ||
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80'
          }
          alt={article.title}
        />

        <p className="article-description">
          {article.description || 'No description available.'}
        </p>

        <a
          className="original-article-button"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article →
        </a>
      </article>
    </main>
  )
}

export default ArticleDetail