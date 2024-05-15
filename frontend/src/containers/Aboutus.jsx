import React from 'react';
import { FaMortarPestle, FaSchool } from "react-icons/fa";

const data = [
  {
    icon: <FaMortarPestle />,
    title: "Personalize Learning",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  },
  {
    icon: <FaSchool />,
    title: "Trusted Courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  },
  {
    // icon: <FaLibrary/>,
    title: "Tools for Students",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  }
]

const Aboutus = () => {
  return (
    <div className="container px-16">
      <div className="lg:col-span-4 mb-5 justify-center text-center">
        <h2 className="main-title">
          <span>Why Academics Works</span>
        </h2>
      </div>
      <div className="flex my-12">

        {data?.map((item, i) => (
          <div className="border lg:col-span-4 md:col-span-6 mb-4 lg:mb-0 p-6 m-6">
            <div className="bg-secondary-color p-6 w-fit"><a href="" className='text-6xl text-font-light '>{item?.icon}</a></div>
            <div className="">
              <h2 className='text-2xl font-bold text-font-color'>{item?.title}</h2>
              <p className='text-base font-normal text-font-color'>{item?.desc}</p>
              <p className='my-4'><a href="#" className="btn-style">Learn More</a></p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Aboutus