import React from 'react'
import './Hero.css'
import hero_img from '../../assets/adhd-hejp.png'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={hero_img} alt="" className='hero-img' />
      <h1><span>To Do Lists for ADHD</span></h1>
      <h2>Unlock Your Potential with To-Do Lists for ADHD</h2>
      <p>Living with ADHD can feel like navigating a never-ending whirlwind of thoughts and tasks. 
        But what if there was a simple tool that could help you regain control and unlock your full potential?</p>
      <div className="hero-action">
      <div className="hero-connect"><a className='link' href='/todo'>To do lists</a></div>
        
      </div>
    </div>
  )
}

export default Hero
