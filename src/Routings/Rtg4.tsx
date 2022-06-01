import React from 'react';
import {BrowserRouter, NavLink, Route, Routes, useParams} from 'react-router-dom';
import styles from './Rtg.module.css';


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
                <NavLink to={'/profile/'} className={activeClassName}>
                    Profile
                </NavLink>
                <NavLink to={'/profile/1'} className={activeClassName}>
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