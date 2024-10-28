import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const NavBar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <p>I am a counter {count}</p>
    </div>
  )
}

export default NavBar
