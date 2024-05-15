import React, { useState } from 'react';
import { FaPencilAlt, FaGraduationCap, FaBook } from "react-icons/fa";

const post = [
  {
    icon: <FaPencilAlt />,
    title: "All Courses",
    desc_one: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.",
    desc_two: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.",
  },
  {
    icon: < FaGraduationCap />,
    title: "Virtual className",
    desc_one: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.",
    desc_two: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.",
  },
  {
    icon: <FaBook />,
    title: "Real Meeting",
    desc_one: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.",
    desc_two: "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.",
  },
]

const Mainbanner = () => {

  return (
    <section className='h-full w-full'>
      <div className="">
        <video autoPlay muted loop controls className="h-fit w-fit">
          <source src="../assets/images/course-video.mp4" type="video/mp4" />
        </video>

        <div className="container text-center">
          <h6 className='text-4xl font-bold uppercase'>Graduate School of Management</h6>
          <h2 className='text-6xl font-bold text-primary-color py-4'><em className='text-6xl font-bold text-secondary-color'>Your</em> Classroom</h2>
          <a href="" className="btn-style uppercase">Discover more</a>
        </div>
      </div>

      <div className="container flex px-[15%]">
        {post.map((item, i) => (
          <div key={i} item className="lg:col-span-4 col-span-12 bg-primary-color p-6 m-6">
            <div className="">
              <h4 className='flex text-2xl font-bold text-font-light my-2'><span className='mx-2'>{item?.icon}</span> {item?.title}</h4>
            </div>
            <div className="">
              <p className='text-base font-normal text-font-light'>{item?.desc_one}</p>
              <p className="sm:hidden text-font-light">{item?.desc_two}</p>
              <div className="text-xl font-semibold text-font-light"><a href="" className='underline'>More Info.</a></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mainbanner