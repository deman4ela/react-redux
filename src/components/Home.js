import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaceholderData } from '../redux/actions';
import PlaceholderData from './PlaceholderData';
import ErrorMessage from './ErrorMessage';

function Home() {
    const { visitorName }  = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchPlaceholderData())
    }
    
    return (
        <div>
            <div>
                Hello, {visitorName}!
            </div>

            <div>
                <button type='submit' onClick={handleClick}> Get some data from JSONPlaceholder </button>
            </div>
            
            <PlaceholderData/>
            <ErrorMessage/>
        </div>
    )
}
export default Home
