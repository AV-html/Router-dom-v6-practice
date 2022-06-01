import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';


export function Rtg2() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'}> main </NavLink>
                <NavLink to={'/login'}> login </NavLink>
                <NavLink to={'/profile'}> Profile </NavLink>
                <NavLink to={'/profile/settings'}> Settings </NavLink>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>

                    <Route path={'/'} element={<div>Main</div>}/>

                    <Route path={'/login'} element={<div>Login</div>}/>

                    <Route path={'/profile/*'} element={
                        <div>
                            Profile
                            <Routes>
                                <Route path={'/settings'} element={<div>Settings</div>}/>
                            </Routes>
                        </div>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}