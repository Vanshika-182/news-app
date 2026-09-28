# NewsHub 📰

NewsHub is a responsive React-based news website that brings the latest news
into one place through a live news API.

The main purpose of this project is to create a clean and interactive news
platform where users can explore headlines, search for specific news, browse
different categories, and open individual articles for more details.

## About the Project

I built NewsHub as a frontend project using React.js and a news API.

Instead of creating separate static pages for every category, the application
fetches news dynamically from the API and displays the articles through
reusable React components.

The homepage focuses on important and trending stories, while users can also
search for news and explore categories such as Technology, Business, Sports,
Science, Health and Entertainment.

## Features

- Live news fetched using News API
- Featured news section
- Trending/latest news sections
- Search news by keyword
- Category-based news browsing
- Individual article detail page
- Responsive design for desktop, tablet and mobile
- Mobile hamburger navigation
- Loading and error handling
- Fallback images for articles without images
- External link to read the complete article
- Reusable React components

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router DOM
- Vite
- News API

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── NewsList.jsx
│   ├── NewsItem.jsx
│   └── ArticleDetail.jsx
├── services/
│   └── newsApi.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx