import React, {useState, useEffect} from 'react';
import { getRandomJoke } from '../chuckservice';
import {Link} from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './chuckyjokes.css'


const Chuckymain = () => {
  
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        getRandomJoke();
    }, []);

    const cantitylikes = () => {
        setLikes(likes+1)
    }

    const cantitydislikes = () => {
        setDislikes(dislikes+1)
    }

    const obtainJoke = () => {
        getRandomJoke()
        .then((response) => {
            if(response.status === 200){
                 console.table(response)
                 console.log(response.data.value);
                setJoke(response.data)
            }
        })
        .catch((error) => {
            alert(`Somethin went wrong: ${error}`);
        })
    }

    return (
        <div className='pepe'>
            <h1>chistes del chuck</h1>
            {joke !== null ? 
            (<div>
                 <img alt='chucky' src={'https://www.latercera.com/resizer/ABp-KPhhaQImHtgzfw8Rgku0laA=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/WZTNR5LJV5GRJCNKKLSM5JRO7A.jpg'}/>
                 <h3>{joke.value}</h3>
                 <p>
                 <ThumbUpIcon className='up' onClick={cantitylikes}></ThumbUpIcon>
                 
                <ThumbDownIcon className='down' onClick={cantitydislikes}></ThumbDownIcon>
                 </p> 
                   

            </div>)
            :null }
            <button onClick={obtainJoke}>
                    Random Joke
                </button>
            <h4>You have {likes} likes and {dislikes} dislikes</h4>
            <Link to='/'>back home</Link>
        </div>
    );
}

export default Chuckymain;
