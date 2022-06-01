import React from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes, useNavigate} from 'react-router-dom';


// По клику перейти на другую страницу

const Profile = () => {
    const navigate = useNavigate() // Возвращает функцию
    //navigate(-1) - вернуться на страницу назад
    //navigate(-2) - вернуться на две страницу назад
    // Аналогично и положительные - вперёд отмотка

    {/* 1 способ: Redirect */
    }
    // useEffect(() => {
    //     if (true) navigate('/login')
    // }, [])
    // Если условие выполнено (не залогинены, то перенеси на login)

    return (
        <div>
            {/* 2 способ: Redirect */}
            {/*// Если условие выполнено (не залогинены, то перенеси на login)*/}
            {true ? <Navigate to={'/login'}/> :
                <>
                    Profile
                    {/* Если не укажем /, то login дописывается - абсолютный адрес */}
                    {/* Если /, то route заменяется на login - относительный адрес */}
                    <button onClick={() => {
                        navigate('/login')
                    }}>Logout
                    </button>
                </>
            }
        </div>
    )
}


export function Rtg6() {
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