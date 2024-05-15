import React from 'react'
import { Aboutus, Courses, Learnmore, Mainbanner, Newslatter, Testimonials } from '../containers'

const Homepage = () => {
  return (
      <>
        <Mainbanner />
        <Aboutus />
        <Courses />
        <Learnmore />
        <Testimonials />
        <Newslatter />
      </>
  )
}

export default Homepage