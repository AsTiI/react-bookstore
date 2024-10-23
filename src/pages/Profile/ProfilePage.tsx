import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ProfilePage.css'
import { LOGIN, LOGOUT, UPDATE_PROFILE } from '../../types/actionTypes';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import InputBtn from '../../components/Button/InputBtn';



const ProfilePage: React.FC = () => {
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleLogout = () => {
        dispatch({type: LOGOUT})
        navigate("/auth");
    };

    const handleUpdate = () => {
        console.log(newPassword === confirmNewPassword);
        
        if(currentUser && oldPassword === currentUser.password&& newPassword === confirmNewPassword){
            dispatch({type: UPDATE_PROFILE, payload: { ...currentUser, password: newPassword, name: newName }})
            setOldPassword('')
            setNewPassword('')
            setConfirmNewPassword('')
        }
    }

    useEffect(()=>{
        if(currentUser && currentUser.name){
            setNewName(currentUser.name)
            console.log(currentUser);
            
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
            else{
                navigate("/auth");
            }
        }
    },[currentUser])

    if (!currentUser) {
        return (
            <div>
                <h1>Загрузка...</h1>
                {/* <h1>Пожалуйста, войдите в систему, чтобы видеть ваш профиль.</h1> */}
                {/* <Button value="Авторизация" onClick={handleLogout} /> */}
            </div>
        );
    }

    return (
        <div className="profilePage">
            <Nav />
            <div className='profilePage_container'>
                <div className="profile_wrapper">
                    <h1>ACCOUNT</h1>
                    <h2>PROFILE</h2>
                    <div className="profile">
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <InputBtn value={newName} onChange={(e)=>setNewName(e.target.value)} id='name' name='name'/>
                        </div>
                        
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <InputBtn value={currentUser.email} id='email' name='email'/>
                        </div>
                       
                        {/* <Button value="Новинки" onClick={()=>navigate("/")} /> */}
                    </div>
                    <h2>PASSWORD</h2>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <InputBtn 
                            value={oldPassword} 
                            type='password' 
                            name='password' 
                            id='password' 
                            placeholder='password'
                            onChange={(e)=>setOldPassword(e.target.value)} />

                        <div className="new-password">
                            <div className="first">
                                <label htmlFor="password">New password</label>
                                <InputBtn value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type='password' name='new_password' id='password' placeholder='New password'/>
                            </div>
                            <div className="second">
                                <label htmlFor="password">Confirm new password</label>
                                <InputBtn value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target.value)} type='password' name='confirm_new_password' id='confirm_new_password' placeholder='Confirm new password'/>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <Button value="Save changes" onClick={handleUpdate} />
                        {/* <Button value="Cencel" className='white-style' onClick={handleLogout} /> */}
                        <Button value="Logout" className='white-style' onClick={handleLogout} />
                    </div>
                    

                </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default ProfilePage;