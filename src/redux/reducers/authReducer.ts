import { AuthActionTypes, LOGIN, LOGOUT } from "../../types/actionTypes";
import { User } from "../../types/userTypes";

const initialState: User = {
    id: 0,
    isAuthenticated: false,
    email: "",
    password: "",
    surname: "",
    name: "",
    fathername: "",
}

export const authReducer = (state = initialState, action: AuthActionTypes): User => { 
    switch (action.type) { 
        case LOGIN: 
            const loggedInUser = { 
                ...action.payload, 
                isAuthenticated: true 
            }; 
            localStorage.setItem("rsn", JSON.stringify(loggedInUser));
            return loggedInUser;  // Return the new state

        case LOGOUT: 
            const loggedOutUser = { 
                ...initialState, // Reset to initial state
                isAuthenticated: false 
            };
            localStorage.removeItem("rsn");
            return loggedOutUser;  // Return the new state

        default: 
            return state;  // Return the existing state for unhandled cases
    } 
};