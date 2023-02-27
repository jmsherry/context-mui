import React from 'react'
import { NavLink } from 'react-router-dom'

function SiteNav() {
  return (
    <nav>
      <NavLink to={'/'}>Form Page</NavLink>
      <NavLink to={'/clocks'}>Clocks Page</NavLink>
      <NavLink to={'/cars'}>Cars</NavLink>
    </nav>
  )
}

export default SiteNav