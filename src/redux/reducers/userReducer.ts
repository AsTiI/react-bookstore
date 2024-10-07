import { LOGIN, LOGOUT, SET_LOCAL_STORAGE, SET_USER, UserActionTypes } from '../../types/actionTypes';
import { UsersState } from '../../types/userTypes';

const initialState: UsersState = {
    users: [{
        id: 1,
        isAuthenticated: false,
        email: "maxim@gmail.com",
        password: "111",
        surname: "Астапёнок",
        name: "Максим",
        fathername: "Дмитриевич",
    },{
        id: 2,
        isAuthenticated: false,
        email: "alice@gmail.com",
        password: "222",
        surname: "Мурукина",
        name: "Алиса",
        fathername: "Петровна",
    }],
    currentUser: null,
};

export const userReducer = (state = initialState, action: UserActionTypes): UsersState => { 
    switch (action.type) { 
        case SET_USER: 
            return {
                ...state,
                users: [...state.users, { ...action.payload, id: Date.now() }]
            };
        
        case SET_LOCAL_STORAGE: 
            if (state.currentUser) {
                localStorage.setItem("rsn", JSON.stringify(state.currentUser));
            }
            return state; 
        
        case LOGIN: 
            if(action.payload) {
                const { email, password } = action.payload;
                const authenticatedUser = state.users.find(user => user.email === email && user.password === password);
                if(authenticatedUser) {
                    const userWithAuth = { 
                        ...authenticatedUser, 
                        isAuthenticated: true 
                    };
                    localStorage.setItem("rsn", JSON.stringify(userWithAuth));
                    return {
                        ...state,
                        currentUser: userWithAuth
                    };
                }
            }
            return state;

        case LOGOUT: 
            localStorage.removeItem("rsn");
            return {
                ...state,
                currentUser: null
            };
        
        default: 
            return state; 
    } 
};