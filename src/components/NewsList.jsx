import { useEffect, useState } from 'react'
import { getTopHeadlines, searchNews, searchCategoryNews, } from '../services/newsApi'
import NewsItem from './NewsItem'

function NewsList({ searchQuery, selectedCategory }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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

      {/* Featured Story */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <span className="hero-label">
            FEATURED STORY
          </span>

          <h1>
            Stay Updated With
            <br />
            The Latest News
          </h1>

          <p>
            Get the latest stories, updates and important
            news from around the world in one place.
          </p>

          <button className="explore-btn">
            Read Featured Story →
          </button>

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

          <button className="view-all">
            View All →
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

            {articles.map((article, index) => (
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

          <div className="trending-item">
            <span>01</span>
            <h3>Latest stories making headlines today</h3>
          </div>

          <div className="trending-item">
            <span>02</span>
            <h3>Important updates from around the world</h3>
          </div>

          <div className="trending-item">
            <span>03</span>
            <h3>Technology and business news you should know</h3>
          </div>

        </div>

      </section>

    </main>
  )
}

export default NewsList