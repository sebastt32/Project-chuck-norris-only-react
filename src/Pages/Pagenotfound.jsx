import React from 'react';

import { Link } from 'react-router-dom';



const Pagenotfound = () => {
    return (
        <div>
            <h1>Not found - error 404</h1>

            <Link to='/' >Back home</Link>


        </div>
    );
}

export default Pagenotfound;
