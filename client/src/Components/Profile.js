import React from 'react'

const Profile = () => {
  return (
    <div id='profilecontainer'>
    <div id='profilecolorbar'></div>
      <div id='profilecircle'></div>
      <div id='profilename'>PROFILE NAME</div>
      <div id='profilecity'>Profile City</div>
      <div id='profilefollowers'>Profile Followers</div>
      <div id='followingcontainer'><a href='/' >
      <div id='profiledm'></div>
    </a><div id='followingbox'><div id='following'><a href='*' id='followingtext'>following</a></div></div><a href='/' >
      <div id='profilechat'></div>
    </a></div>
    <div id='profilebio'>
      <p>Ozzy is a music producer and up-and-coming artist. He enjoys networking within...</p>
    </div>
    <div className='biolinks'>
    <a href= 'www.soundcloud.com'>
         <div id='soundcloud'></div>
    </a>
    <a href='www.spotifiy.com'>
    <div id='spotify'></div>
    </a>
    <a href='www.instagram.com'>
    <div id='instagram'></div>
    </a>
    <a href='www.youtube.com'>
    <div id='youtube'></div>
    </a>
    </div>
    <div id='mediacontainer'><div className='profilemediatext'>singles</div><div className='profilemediatext'>albums</div><div className='profilemediatext'>videos</div></div>
    </div>
   
  )
}

export default Profile
