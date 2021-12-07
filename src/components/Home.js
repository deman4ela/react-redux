import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeVisitorNameAction } from '../redux/reducer';

function Home() {
    const [ name, setName] = useState('');
    const { age, visitorName }  = useSelector((state) => state)
    return (
        <div>
            Hello, {visitorName}!
        </div>
    )
}
export default Home;