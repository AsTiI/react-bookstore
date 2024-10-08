export interface User {
    id: number;
    isAuthenticated?: boolean;
    email: string;
    password: string;
    surname: string;
    name: string;
    fathername: string;
}

export interface UsersState {
    users: User[];
    currentUser: User | null;
}