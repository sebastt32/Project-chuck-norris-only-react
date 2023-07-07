import React from 'react';
import Button from '@mui/material/Button';
import '../Pages/Main.css'
import { Link, Redirect } from 'react-router-dom';

const jokes = () => {
    return <Redirect to='/chuckjokes'></Redirect>
}

const noquiero = () =>{
    alert("Te jodiste");
}

const Main = () => {

    return (
        <div className='chuckmain'>
            <img alt='chuck' src='https://w7.pngwing.com/pngs/876/730/png-transparent-chuck-norris-facts-united-states-the-expendables-2-meme-chuck-norris-celebrities-tshirt-united-states-thumbnail.png'></img>
            <h1>Quieres un chiste?</h1>
            <p>
            <Button component={Link} to='/chuckjokes' variant="outlined" onClick={noquiero}>! NO !</Button>
            <Button component={Link} to='/chuckjokes' variant="contained" onClick={()=>jokes()}>! CLARO !</Button>
            </p>
            
            <h3>page lost</h3>
            <Link to='/pepe'> pepe</Link>

        </div>
    );
}

export default Main;
