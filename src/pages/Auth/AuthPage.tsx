import './AuthPage.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import Button from '../../components/Button/Button';
import { LOGIN } from '../../types/actionTypes';
import InputBtn from '../../components/Button/InputBtn';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const { currentUser } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
            navigate("/profile");
        }else{
            const token = localStorage.getItem('rsn');
            if (token) {
                try {
                    const parsedToken = JSON.parse(token);
                    dispatch({type: LOGIN, payload: { email: parsedToken.email, password: parsedToken.password }});
                } catch (error) {
                    console.error("Ошибка при парсинге токена:", error);
                }
            }
        }
    }, [currentUser]);

    const handleSignUp = () => {
        navigate("/reg");
    };

    const handleSignIn = () => {
        navigate("/auth");
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: LOGIN, payload: { email: email, password: password }});
        console.log({ email: email, password: password });
    };



    return (
        <div className="authpage">
            <Nav />
            <div className='authpage_container'>
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
                    <form onSubmit={handleLogin}>
                        <div className='form_elem'>
                            <label htmlFor="email">Email:</label>
                                <InputBtn className='grow' value={email} placeholder='Your email' required={true} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form_elem'>
                            <label htmlFor="password">Password:</label>
                                <InputBtn className='grow' value={password} type="password" placeholder='Your password' required={true} onChange={(e) => setPassword(e.target.value)}/>

                        </div>
                        <p>Forgot password?</p>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="btns_container">
                            <Button className='btn' type='submit' value='Sign in' />
                        </div>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
        
    );
};

export default AuthPage;