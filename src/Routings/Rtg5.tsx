import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Rtg.module.css';


export function Rtg5() {
    const activeClassName = ({isActive}: { isActive: boolean }) => (isActive ? `${styles.active} ${styles.notActive}` : styles.notActive);
    // class & style аналогично

    // Link - не использует activeClassName

    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={'/'} className={activeClassName}>
                    main
                </NavLink>
                <NavLink to={'/login'} className={activeClassName}>
                    login
                </NavLink>
                <NavLink style={(obj) => {
                    return {color: obj.isActive ? 'lightgreen' : 'blue'}
                }} to={'/profile'} className={activeClassName}>
                    Profile
                </NavLink>
                <NavLink style={{color: 'lightgreen'}} to={'/profile/settings'} className={activeClassName}>
                    Settings
                </NavLink>

                <div>
                    <a
                        href={'https://yandex.ru'}
                        target={'_blank'}
                        rel={'noreferrer nofollow noopener'}
                    >
                        Link
                    </a>
                </div>


                <Routes>
                    <Route path={'/*'} element={<div>error 404</div>}/>

                    <Route path={'/'} element={<div>Main</div>}/>

                    <Route path={'/login'} element={<div>Login</div>}/>

                    <Route path={'/profile'} element={<div>Profile</div>}/>

                    <Route path={'/profile/settings'} element={<div>Settings</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}