import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className="navbar-brand mx-2" to='/'>table1</Link>
          </li>
          <li className='nav-item active'>
            <Link className="navbar-brand mx-2" to='/table2'>table2</Link>
          </li>
          <li className='nav-item active'>
            <Link className="navbar-brand mx-2" to='/table3'>table3</Link>
          </li>
        </ul>
      </div>



    </nav>
  )
}
