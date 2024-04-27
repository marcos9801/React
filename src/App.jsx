import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/about/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
          <Title subtitle='Our PROGRAM' title='What We Offer' />
          <Programs />
          <About />
          <Title subtitle="Gallery" title="Our Campus" />
          <Campus />
          <Title subtitle="Testimonials" title="What Students Says" />
          <Testimonials />
      </div>
      
    </div>
  )
}

export default App