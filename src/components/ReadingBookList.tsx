import { useContext } from 'react'
import {
  BooksContext,
  BooksActionKind,
} from '../store/book-context/book-context'
import { IBook } from '../interfaces/Book'

const ReadingBookList = () => {
  const booksContext = useContext(BooksContext)

  const onClickCardHandler = (book: IBook) => {
    booksContext.dispatchBooksAction({
      type: BooksActionKind.REMOVE_BOOK_FROM_READING,
      payload: book,
    })

    booksContext.dispatchBooksAction({
      type: BooksActionKind.FILTER_AVAILABLE_BOOKS,
      payload: 'All',
    })
  }

  return (
    <>
      {booksContext.booksState.readingBooks.length > 0 ? (
        <ul className='flex flex-col gap-5'>
          {booksContext.booksState.readingBooks.map(book => (
            <li
              key={book.cover}
              className='max-w-[150px] aspect-[4/5] cursor-pointer'
              onClick={() => onClickCardHandler(book)}
            >
              <img
                src={book.cover}
                alt={book.title}
                className='w-full h-full object-cover'
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-white'>No books in reading list</p>
      )}
    </>
  )
}

export default ReadingBookList
