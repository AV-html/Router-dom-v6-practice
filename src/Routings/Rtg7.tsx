import React, {useEffect} from 'react';
import {BrowserRouter, NavLink, Route, Routes, useSearchParams} from 'react-router-dom';


const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    // http://localhost:3000/profile/?name=ign
    console.log(searchParams.get('name')); // 'ign'
    console.log(Object.fromEntries(searchParams)); // {name: 'ign'}


    // Перезапрос данных
    useEffect(() => {
        console.log('research...');
    }, [searchParams])

    return (
        <div>
            Profile
            <button onClick={() => {
                setSearchParams({...Object.fromEntries(searchParams), age: '33'}) // всегда передаём строку
            }}>
                add age
            </button>
        </div>
    )
}


export function Rtg7() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'}> main </NavLink>
                <NavLink to={'/login'}> login </NavLink>
                <NavLink to={'/profile/'}> Profile </NavLink>
                <NavLink to={'/profile/1'}> Settings </NavLink>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>
                    <Route path={'/'} element={<div>Main</div>}/>
                    <Route path={'/login'} element={<div>Login</div>}/>
                    <Route path={'/profile/'} element={<Profile/>}/>
                    <Route path={'/profile/settings'} element={<div>Settings</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}