function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">

          <div className="logo">
            <span className="logo-icon">📰</span>
            <span>NewsHub</span>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search news..."
            />
            <button>🔍</button>
          </div>

        </div>
      </header>


      <nav className="category-bar">
        <div className="category-container">

          <button className="category active">
            All
          </button>

          <button className="category">
            India
          </button>

          <button className="category">
            World
          </button>

          <button className="category">
            Technology
          </button>

          <button className="category">
            Business
          </button>

          <button className="category">
            Sports
          </button>

          <button className="category">
            Entertainment
          </button>

          <button className="category">
            Science
          </button>

          <button className="category">
            Health
          </button>

        </div>
      </nav>
    </>
  )
}

export default Header