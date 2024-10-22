import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './RegistrationPage.css'
import Button from '../../components/Button/Button';
import { User } from '../../types/userTypes';
import { SET_USER } from '../../types/actionTypes';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import InputBtn from '../../components/Button/InputBtn';

export default function RegistrationPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialUser: User = {
        id: 0,
        isAuthenticated: false,
        email: "",
        password: "",
        surname: "",
        name: "",
        fathername: "",
    }

    const [newUser, setNewUser] = useState<User>(initialUser);
    const [error, setError] = useState<string | null>(null);
    const [confirmPassword, setComfirmPassword] = useState('');

    const onReg = () =>{
        console.log(newUser);
        dispatch({type: SET_USER, payload: newUser});
        // dispatch(setUser(newUser));
        navigate("/auth");
    }

    const handleSignUp = () => {
        navigate("/reg");
    };

    const handleSignIn = () => {
        navigate("/auth");
    };

  return (
    <div className="regpage">
        <Nav />
        <div className='regpage_container'>
            <div className="authpage-wrapper">
                <div className="sign_in-up">
                    <div className="sign-in">
                        <p onClick={handleSignIn} >sign in</p>
                    </div>
                    <div className="sign-up">
                        <p onClick={handleSignUp} >sign up</p>
                    </div>
                </div>
                <hr />
                <form onSubmit={onReg}>
                    <div className='form_elem'>
                        <label htmlFor="name">Name</label>
                        <InputBtn type="text"
                                name="name"
                                id="user_password"
                                value={newUser.name}
                                placeholder='Your name'
                                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                                required={true}/>
                    </div>
                    <div className='form_elem'>
                        <label htmlFor="email">Email</label>
                        <InputBtn type="email"
                                name="email"
                                id="user_email"
                                value={newUser.email}
                                placeholder='Your email'
                                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                                required={true}/>
                    </div>
                    <div className='form_elem'>
                        <label htmlFor="password">Password</label>
                        <InputBtn type="password"
                                name="password"
                                id="user_password"
                                value={newUser.password}
                                placeholder='Your password'
                                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                                required={true}/>
                    </div>
                    <div className='form_elem'>
                        <label htmlFor="confirm_password">Confirm password</label>
                        <InputBtn type="password"
                                name="confirm_password"
                                id="user_confirm_password"
                                value={confirmPassword}
                                placeholder='Confirm your password'
                                onChange={(e) => setComfirmPassword(e.target.value)}
                                required={true}/>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button type="submit" value='Sign up' />
                    <Button value='Cencel' onClick={()=>navigate("/auth")}/>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}
