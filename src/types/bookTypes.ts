export interface Book {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

export interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

export interface CartItem {
    book: Book;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}

export interface BookDetailsState extends Book {
    author: string;
    desc: string;
    error: string;
    isbn10: string;
    language: string;
    pages: string;
    pdf: string;
    publisher: string;
    rating: string;
    year: string;
}