import React from 'react';
import {Rtg6} from './Routings/Rtg6';


function App() {

    return (
        <div>
            <h2>Routes, Route - main, 404, другие ссылки</h2>
            {/*<Rtg1/>*/}

            <h2>Вложенный Route</h2>
            {/*<Rtg2/>*/}

            <h2>Outlet - вложенный Route, :id</h2>
            {/*<Rtg3/>*/}

            <h2>useParams - получить :id из роута</h2>
            {/*<Rtg4/>*/}

            <h2>NavLink, Link, a - стили ссылки (style, className)</h2>
            {/*<Rtg5/>*/}

            <h2>useNavigate - редирект по клику</h2>
            <Rtg6/>
        </div>
    );
}

export default App;
