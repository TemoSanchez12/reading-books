import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BooksContextProvider } from './store/book-context/book-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BooksContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BooksContextProvider>
)
