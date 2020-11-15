import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="NavBarContainer">
        <div className="NavLinks"><a href='*' className="NavLink">HOME</a><a href='*' className="NavLink">ABOUT US</a><a href='*' className="NavLink">ACCOUNT</a></div>
        <div className="NavTitle">MIND-LINK</div>
        <div> 
        <input
          type="text"
          className="navsearch"
          placeholder="      SEARCH"
        /></div>
      </div>
    </div>
  )
}

export default Navbar
