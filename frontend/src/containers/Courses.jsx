import React from 'react';
import course01 from "../assets/images/courses-01.jpg";
import course02 from "../assets/images/courses-02.jpg";
import course03 from "../assets/images/courses-03.jpg";
import course04 from "../assets/images/courses-04.jpg";
import course05 from "../assets/images/courses-05.jpg";
import course06 from "../assets/images/courses-03.jpg";
import CourseItem from './CourseItem';

const course_item = [
  {
    image: course01,
    price: "$99.00",
    category: "Mobile Application",
    title: "How To Create Mobile Apps Using Ionic",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  },
  {
    image: course02,
    price: "$99.00",
    category: "Web Design",
    title: "How To Create Mobile Apps Using Ionic",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  },
  {
    image: course03,
    price: "$99.00",
    category: "Arithmetic",
    title: "How To Create Mobile Apps Using Ionic",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  },
  // {
  //   image: course04,
  //   price: "$99.00",
  //   category: "Mobile Application",
  //   title: "How To Create Mobile Apps Using Ionic",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  // },
  // {
  //   image: course05,
  //   price: "$99.00",
  //   category: "Web Design",
  //   title: "How To Create Mobile Apps Using Ionic",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  // },
  // {
  //   image: course06,
  //   price: "$99.00",
  //   category: "Mobile Application",
  //   title: "How To Create Mobile Apps Using Ionic",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.",
  // }
]

const Courses = () => {
  return (
    <div className="container">
      <div className="mb-5 justify-center text-center">
        <div className="lg:col-span-6 mb-5">
          <h2 className="main-title">
            <span>Popular Courses</span>
          </h2>
          <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, id?</p>
        </div>
      </div>

      <div className="grid grid-flow-col gap-4">
        {course_item?.map((item, i) => (
          <CourseItem key={i} item={item} />
        ))}
      </div>
    </div>

  )
}

export default Courses