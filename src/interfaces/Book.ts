export interface IBook {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  ISBN: string
  year: number
}

export interface IAuthor {
  name: string
  otherBooks: string[]
}
