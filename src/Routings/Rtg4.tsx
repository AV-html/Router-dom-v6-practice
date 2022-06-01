import React from 'react';
import {BrowserRouter, NavLink, Route, Routes, useParams} from 'react-router-dom';


const Profile = () => {
    // '/profile/:id'
    const params = useParams<'id'>()
    // const params = useParams<'id1' | 'id2'>() // Если нужно 2 параметра
    const some = params.id
    console.log(params); // object {'id': '1'}

    console.log(some); // '1'

    return <div>Profile {some}</div>

    // '/profile/*'
    // const params = useParams<'*'>()
    // const some = params['*'];
}


export function Rtg4() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'}>
                    main
                </NavLink>
                <NavLink to={'/login'}>
                    login
                </NavLink>
                <NavLink to={'/profile/'}>
                    Profile
                </NavLink>
                <NavLink to={'/profile/1'}>
                    Profile-1
                </NavLink>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>
                    <Route path={'/'} element={<div>Main</div>}/>
                    <Route path={'/login'} element={<div>Login</div>}/>

                    {/* :id - id будет <'id'>, можно написать x, y - всё что угодно */}
                    <Route path={'/profile/:id'} element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}