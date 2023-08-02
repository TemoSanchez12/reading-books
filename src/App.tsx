import AvailableBooksList from './components/AvailableBooksList'
import BooksFilters from './components/BooksFilters'
import HeaderAvailableBooks from './components/HeaderAvailableBooks'
import ReadingBookList from './components/ReadingBookList'

function App() {
  return (
    <section className='flex gap-8 w-11/12 mx-auto justify-center'>
      <div className='mt-24 border border-zinc-600 rounded-md bg-zinc-800 p-6 w-8/12'>
        <HeaderAvailableBooks />
        <BooksFilters />
        <AvailableBooksList />
      </div>

      <div className='mt-24 border border-zinc-600 rounded-md bg-zinc-800 p-6'>
        <ReadingBookList />
      </div>
    </section>
  )
}

export default App
