import React from 'react';
import blog_lg_01 from "../assets/images/schedule/blog_large_1.jpg";
import blog01 from "../assets/images/schedule/blog_1.jpg";
import blog02 from "../assets/images/schedule/blog_2.jpg";

const blog = [
  {
    image: blog01,
    date: "June 6, 2019",
    tags: [
      {
        title: "Admission",
      },
      {
        title: "Updates",
      },
    ],
    heading: "Campus Camping and Learning Session",
  },
  {
    image: blog02,
    date: "June 6, 2019",
    tags: [
      {
        title: "Admission",
      },
      {
        title: "Updates",
      },
    ],
    heading: "Campus Camping and Learning Session",
  },
  {
    image: blog01,
    date: "June 6, 2019",
    tags: [
      {
        title: "Admission",
      },
      {
        title: "Updates",
      },
    ],
    heading: "Campus Camping and Learning Session",
  }
]

const Learnmore = () => {
  return (
    <div className="container">
      <div className="">

        <div className="">
          <div className="lg:col-span-9">
            <div className="text-center my-6">
              <h2 className="main-title">News &amp; Updates</h2>
              <a href="#" className='sub-title'>Read All News</a>
            </div>
            <div className="grid grid-flow-col justify-evenly">

              <div className="">
                <div className="">
                  <a href="" className=""><img src={blog_lg_01} alt="Image" className="h-60 w-80"/></a>
                  <div className="">
                    <div className="">
                      <a href="#">June 6, 2019</a>
                      <span className="mx-1">/</span>
                      <a href="#">Admission</a>, <a href="#">Updates</a>
                    </div>
                    <h3 className=""><a href="">Campus Camping and Learning Session</a></h3>
                  </div>
                </div>
              </div>

              <div className="">

                {blog?.map((item, i) => (
                  <div key={i} item className="flex mb-4">
                    <a href="" className="mr-4"><img src={item?.image} alt="Image" className="h-20 w-32" /></a>
                    <div className="">
                      <div className="">
                        <a href="#">{item?.date}</a>
                        <span className="mx-1">/</span>
                        {blog?.item?.tags.map((item, i) => (
                          <a key={i} item href="#">{item?.title}</a>
                        ))}
                      </div>
                      <h3 className=""><a href="">{item?.heading}</a></h3>
                    </div>
                  </div>
                ))}

              </div>

              <div className="">
                <div className="">
                  <h2 className="text-black">Campus Videos</h2>
                  <a href="#">View All Videos</a>
                </div>
                <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
                  <span className="play">
                    <span className="icon-play"></span>
                  </span>
                  <img src="../assets/images/courses-05.jpg" alt="Image" className="" />
                </a>
                <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
                  <span className="play">
                    <span className="icon-play"></span>
                  </span>
                  <img src="../assets/images/courses-05.jpg" alt="Image" className="" />
                </a>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Learnmore