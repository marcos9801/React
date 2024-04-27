import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='About'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Officia dolore quae
            nesciunt maxime? Voluptas tempore et            
            perferendis libero necessitatibus
            accusamus autem, ab, maxime, est
            facilis ut excepturi repellat? </p>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Officia dolore quae
            nesciunt maxime? Voluptas tempore et
            perferendis libero necessitatibus
            accusamus autem, ab, maxime, est
            facilis ut excepturi repellat? </p>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Officia dolore quae
            nesciunt maxime? Voluptas tempore et
            perferendis libero necessitatibus
            accusamus autem, ab, maxime, est
            facilis ut excepturi repellat? </p>        
        </div>
    </div>
  )
}

export default About