import { useState } from 'react'
function Header({ searchQuery, setSearchQuery, setSearchTerm }) {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestions = [
    'India',
    'World',
    'Technology',
    'Business',
    'Sports',
    'Entertainment',
    'Science',
    'Health',
  ]

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const handleSearch = () => {
    setSearchTerm(searchQuery)
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setSearchTerm(suggestion)
    setShowSuggestions(false)
  }

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
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => {
                if (searchQuery) {
                  setShowSuggestions(true)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />
            <button className="search-button"
              onClick={handleSearch}>🔍

            </button>
            { showSuggestions &&
            searchQuery && filteredSuggestions.length > 0 && (
              <div className="search-suggestions">

                {filteredSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}

               </div>
            )}

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