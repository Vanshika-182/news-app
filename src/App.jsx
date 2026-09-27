import './App.css'

import { useState } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="app">
      <Header 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      setSearchTerm={setSearchTerm}
       />
      <NewsList searchQuery={searchTerm}
       />
      <Footer />
    </div>
  )
}

export default App
