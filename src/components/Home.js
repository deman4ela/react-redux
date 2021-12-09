import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { changeVisitorNameAction } from '../redux/reducer'

function Home() {
  const [name, setName] = useState('')
  const { age, visitorName } = useSelector((state) => state)
  return <div>Hello, {visitorName}!</div>
}
export default Home
