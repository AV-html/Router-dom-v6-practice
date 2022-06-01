import React from 'react';
import {BrowserRouter, NavLink, Outlet, Route, Routes} from 'react-router-dom';


export function Rtg3() {

    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'}>
                    main
                </NavLink>
                <NavLink to={'/login'}>
                    login
                </NavLink>
                <NavLink to={'/profile'}>
                    Profile
                </NavLink>
                <NavLink to={'/profile/settings'}>
                    Settings
                </NavLink>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>

                    <Route path={'/'} element={<div>Main</div>}/>

                    <Route path={'/login'} element={<div>Login</div>}/>

                    {/* Компонент Route c children */}
                    <Route path={'/profile'} element={
                        <div>
                            Profile

                            {/* Куда вставить вложенный Route */}
                            <Outlet/>
                        </div>
                    }>
                        {/* /profile/settings или settings */}
                        <Route path={'settings'} element={<div>Settings</div>}/>

                        {/* Пути первой вложенности */}
                        <Route path={':id'} element={<div>id</div>}/>

                        {/* Пути двойной вложенности (должно быть 2 id) */}
                        <Route path={':id/:id'} element={<div>id</div>}/>

                        {/* Все остальные пути */}
                        <Route path={'*'} element={<div>Page not found</div>}/>
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}