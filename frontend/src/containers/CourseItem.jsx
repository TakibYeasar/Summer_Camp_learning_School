import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";

const CourseItem = ({item}) => {
  return (
      <div className="col-span-4 shadow-md">
          <figure className="">
              <a href=""><img src={item?.image} alt="Image" className="h-60 w-full" /></a>
              <div className="relative">
                  <h3 className='bg-primary-color w-fit text-lg text-font-light p-4 absolute bottom-[50%]'>{item?.price}</h3>
                  <h3 className='bg-secondary-color text-xl font-semibold text-font-light p-4'>{item?.category}</h3>
              </div>
          </figure>
          <div className="p-8 items-center justify-center">
              <h2 className='text-lg font-semibold text-font-color'>{item?.title}</h2>
              <div className="text-center mb-3 flex">
                  <FaStar className='text-amber-500' />
                  <FaStar className='text-amber-500' />
                  <FaStar className='text-amber-500' />
                  <FaStar className='text-amber-500' />
                  <FaStarHalf className='text-amber-500' />
              </div>
              <p className="mb-4 text-base font-normal text-font-color">{item?.desc}</p>
              <p><a href="" className="btn-style rounded-0 px-4">Enroll In This Course</a></p>
          </div>
      </div>
  )
}

export default CourseItem