import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <header>
        <Link to="/">Redux CRUD APP</Link>
        <nav>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Nav