import './App.css'

import { useState } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticleDetail from './components/ArticleDetail'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <NewsList
                searchQuery={searchTerm}
                selectedCategory={selectedCategory}
              />

              <Footer />
            </>
          }
        />

        <Route
          path="/article"
          element={<ArticleDetail />}
        />
      </Routes>
    </div>
  </BrowserRouter>

    
  )
}

export default App
