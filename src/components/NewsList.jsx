import { useEffect, useState } from 'react'
import { getTopHeadlines, searchNews, searchCategoryNews, } from '../services/newsApi'
import NewsItem from './NewsItem'
import { useNavigate } from 'react-router-dom'

function NewsList({ searchQuery, selectedCategory }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError('')

        let data

        if (searchQuery.trim()) {
          data = await searchNews(searchQuery.trim())
        } else if (selectedCategory !== 'All') {
          data = await searchCategoryNews(selectedCategory)
        } else {
          data = await getTopHeadlines()
        }
        setArticles(data)
        setFeaturedArticle(data[0] || null)
      } catch (error) {
        console.error(error)
        setError('Unable to load news right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [searchQuery, selectedCategory])

  return (
    <main>
      {/* Breaking News Ticker */}
      {!loading && !error && articles.length > 0 && (
        <section className="breaking-ticker">

          <div className="breaking-label">
            ⚡ BREAKING NEWS
          </div>

          <div className="breaking-track">
            {articles.slice(0, 6).map((article, index) => (
              <span
                className="breaking-headline"
                key={article.url || index}
              >
                {article.title}
                <span className="ticker-separator">•</span>
              </span>
            ))}
          </div>

        </section>
      )}
      {/* Featured Story */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <span className="hero-label">
            FEATURED STORY
          </span>

          {featuredArticle && (
            <>
              <h1>
                {featuredArticle.title}
              </h1>

              <p>
                {featuredArticle.description ||
                  'Read the latest news and updates.'}
              </p>

              <button
                className="explore-btn"
                onClick={() =>
                  navigate('/article', {
                    state: { article: featuredArticle },
                  })
                }
              >
                Read Featured Story →
              </button>
            </>
          )}

        </div>

      </section>


      {/* Latest News */}
      <section className="news-section" id="latest">

        <div className="section-heading">

          <div>
            <span className="section-label">
              TOP STORIES
            </span>

            <h2>Latest News</h2>
          </div>

          <button className="view-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less ↑' : 'View All →'}
          </button>

        </div>


        {loading && (
          <p>Loading latest news...</p>
        )}


        {error && (
          <p>{error}</p>
        )}


        {!loading && !error && (
          <div className="news-grid">

            {(showAll ? articles : articles.slice(0, 6)).map((article, index) => (
              <NewsItem
                key={article.url || index}
                article={article}
              />
            ))}

          </div>
        )}

      </section>


      {/* Trending */}
      <section className="trending-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              TRENDING
            </span>

            <h2>Most Read</h2>
          </div>

        </div>

        <div className="trending-list">

          <div className="trending-item"
            onClick={() =>
              navigate('/article', {
                state: { article: articles[0] },
              })
            }
          >
            <span>01</span>
            <h3>{articles[0]?.title}</h3>

          </div>

          <div className="trending-item"
            onClick={() =>
              navigate('/article', {
                state: { article: articles[1] },
              })
            }
          >
            <span>02</span>
            <h3>{articles[1]?.title}</h3>

          </div>

          <div className="trending-item"
            onClick={() =>
              navigate('/article', {
                state: { article: articles[2] },
              })
            }
          >
            <span>03</span>
            <h3>{articles[2]?.title}</h3>


          </div>

        </div>

      </section>

    </main>
  )
}

export default NewsList