import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';


export function Rtg1() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'}>
                    -main-
                </NavLink>
                <NavLink to={'/login'}>
                    -login-
                </NavLink>
                <NavLink to={'/profile'}>
                    -Profile-
                </NavLink>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>

                    <Route path={'/'} element={<div>Main</div>}/>

                    <Route path={'/login'} element={<div>Login</div>}/>

                    <Route path={'/profile'} element={<div>Profile</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}