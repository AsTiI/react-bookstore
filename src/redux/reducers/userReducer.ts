import { LOGIN, LOGOUT, SET_LOCAL_STORAGE, SET_USER, UPDATE_PROFILE, UserActionTypes } from '../../types/actionTypes';
import { UsersState } from '../../types/userTypes';

const initialState: UsersState = {
    users: [{
        id: 1,
        isAuthenticated: false,
        email: "maxim@gmail.com",
        password: "111",
        surname: "Кит",
        name: "Максим",
        fathername: "Дмитриевич",
    },{
        id: 2,
        isAuthenticated: false,
        email: "alice@gmail.com",
        password: "222",
        surname: "Мур",
        name: "Алиса",
        fathername: "Петровна",
    }],
    currentUser: null,
};

export const userReducer = (state = initialState, action: UserActionTypes): UsersState => { 
    switch (action.type) { 
        case UPDATE_PROFILE:
            return {
                users: state.users.map((user)=>user.id === action.payload.id ? action.payload : user),
                currentUser: action.payload
            }
            
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
                }else{
                    console.log(2);
                    
                    localStorage.removeItem("rsn");
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