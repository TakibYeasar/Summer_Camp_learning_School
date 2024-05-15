import React from 'react'

const Footer = () => {
  return (
    <div className="">
      <div className=" bg-primary-color py-8">
        <div className="container grid grid-flow-col gap-4">
          <div className="col-span-3">
            <div className="text-3xl no-underline  text-font-light font-bold mb-4"><a href="/" className="block">SCL <span className='text-secondary-color'>School</span></a></div>
            <p className=' text-secondary-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
            <a href="#" className='btn-outline-border text-font-light my-12'>Learn More</a>
          </div>
          <div className="col-span-3">
            <h3 className="main-title text-font-light"><span>Our Campus</span></h3>
            <ul className="">
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Acedemic</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>News</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Our Interns</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Our Leadership</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Careers</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Human Resources</a></li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="main-title text-font-light"><span>Our Courses</span></h3>
            <ul className="">
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Math</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Science &amp; Engineering</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Arts &amp; Humanities</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Economics &amp; Finance</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Business Administration</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Computer Science</a></li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="main-title text-font-light"><span>Contact</span></h3>
            <ul className="">
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Help Center</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Support Community</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Press</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Share Your Story</a></li>
              <li className='nav-item'><a href="#" className='nav-link text-secondary-color'>Our Supporters</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer