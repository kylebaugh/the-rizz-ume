import React from 'react'
import '../styles/header.css'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()
  // Logo
  // Company
  // Username
  // Photo

  return (
    <div id='header' >
      <section id='headerLeft' className='headerSection' onClick={() => navigate('/')}>
        <img src="src\assets\the-rizzler2.jpeg" alt="logo" style={{height:'30px', cursor: 'pointer'}}/>
        <p style={{cursor: 'pointer'}}>The Rizz-ume</p>
      </section>
      <section id='headerRight' className='headerSection'>
        
        <CgProfile/>
        <p onClick={() => navigate('/jobs')} style={{cursor: 'pointer'}}>Jobs</p>
        <p onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>Username</p>
      </section>
    </div>
  )
}

export default Header
