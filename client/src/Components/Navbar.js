import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="NavBarContainer">
      <div className="NavTitle">MIND-LINK</div>
        <div className="NavLinks"><a href='/' className="NavLink">BROWSE</a><a href='/aboutus' className="NavLink">PLAYLISTS</a><a href='/login' className="NavLink">SEARCH</a></div>
        <div className='navBarRight'> 
        <div className="uploadlink"><a href='/' className="navupload">UPLOAD</a></div>
        <div id='navuser'>
    </div>
    <div id='navName'>Name</div>
    <a href='/' >
      <div id='navbell'></div>
    </a>
    <a href='/' >
      <div id='navdm'></div>
    </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
