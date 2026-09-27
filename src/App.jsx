import './App.css'

import { useState } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <div className="app">
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
    </div>
  )
}

export default App
