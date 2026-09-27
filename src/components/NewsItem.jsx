function NewsItem() {
  return (
    <article className="news-card">

      <div className="news-image">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
          alt="News"
        />
      </div>

      <div className="news-content">

        <span className="news-category">
          TECHNOLOGY
        </span>

        <h3>
          Latest Technology News and Updates
        </h3>

        <p>
          Stay updated with the latest developments,
          innovations and important technology stories
          from around the world.
        </p>

        <div className="news-footer">

          <span className="date">
            September 27, 2026
          </span>

          <button className="read-more">
            Read More →
          </button>

        </div>

      </div>

    </article>
  )
}

export default NewsItem