import { useContext } from 'react'
import {
  BooksContext,
  BooksActionKind,
} from '../store/book-context/book-context'

const BooksFilters = () => {
  const booksContext = useContext(BooksContext)
  const genres: string[] = []

  for (let book of booksContext.booksState.totalBooks) {
    if (!genres.includes(book.genre)) {
      genres.push(book.genre)
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    booksContext.dispatchBooksAction({
      type: BooksActionKind.FILTER_AVAILABLE_BOOKS,
      payload: event.target.value,
    })
  }

  return (
    <div className='w-1/2 mx-auto my-8'>
      <form>
        <div>
          <label htmlFor='' className='mr-4 text-white'>
            Filter by:
          </label>
          <select className='w-32' onChange={onChangeHandler}>
            <option value='All'>All</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default BooksFilters
