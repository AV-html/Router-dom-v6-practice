import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Rtg1.module.css';


export function Rtg2() {
    const activeClassName = ({isActive}: { isActive: boolean }) => (isActive ? `${styles.active} ${styles.notActive}` : styles.notActive);
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'} className={activeClassName}>
                    main
                </NavLink>
                <NavLink to={'/login'} className={activeClassName}>
                    login
                </NavLink>
                <NavLink to={'/profile'} className={activeClassName}>
                    Profile
                </NavLink>
                <NavLink to={'/profile/settings'} className={activeClassName}>
                    Settings
                </NavLink>


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