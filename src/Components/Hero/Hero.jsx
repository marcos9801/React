import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Learn to code by watching others</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus sed, sint nemo rerum numquam dolores placeat labore. Sed dolore voluptas repellendus dolor asperiores iure, corporis debitis obcaecati laborum magnam vel adipisci corrupti quam quibusdam! Debitis vitae magni veniam quis?</p>
                <button className='btn'>explore more<img src={dark_arrow} alt="" /></button>
            </div>
        </div>


    )
}

export default Hero