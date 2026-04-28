export interface Book {
    title: string
    author: string
    isFavorite: boolean
    gender: Gender
    image: string
}

export interface Gender {
    id: string
    value: string
    books: Book[]
}