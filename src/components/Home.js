import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlaceholderData } from '../redux/actions'
import PlaceholderData from './PlaceholderData'
import ErrorMessage from './ErrorMessage'
import { mySelector } from '../redux/selectors'
import { useLocation } from 'react-router'

function Home() {
    const visitorName = useSelector(mySelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaceholderData())
    }, [])
    
    return (
        <div>
            <div>
                Hello, {visitorName}!
            </div>           
            <PlaceholderData/>
            <ErrorMessage/>
        </div>
    )
}
export default Home;
