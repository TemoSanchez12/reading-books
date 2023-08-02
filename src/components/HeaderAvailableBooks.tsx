import { useContext } from 'react'
import { BooksContext } from '../store/book-context/book-context'

const HeaderAvailableBooks = () => {
  const booksContext = useContext(BooksContext)

  return (
    <div className='header-available-books text-center mb-9 text-white'>
      <p className='text-2xl'>
        {booksContext.booksState.availableBooks.length} Available Books
      </p>
      <p className='text-sm'>
        {booksContext.booksState.readingBooks.length} in reading list
      </p>
    </div>
  )
}

export default HeaderAvailableBooks
