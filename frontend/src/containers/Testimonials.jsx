import React from 'react';
import person01 from "../assets/images/avatar/person_1.jpg";
import person02 from "../assets/images/avatar/person_2.jpg";
import person03 from "../assets/images/avatar/person_3.jpg";
import person04 from "../assets/images/avatar/person_4.jpg";


const test_item = [
  {
    image: person01,
    name: "Allison Holmes",
    designation: "Designer",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  },
  {
    image: person02,
    name: "Allison Holmes",
    designation: "Designer",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  },
  // {
  //   image: person03,
  //   name: "Allison Holmes",
  //   designation: "Designer",
  //   message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  // },
  // {
  //   image: person04,
  //   name: "Allison Holmes",
  //   designation: "Designer",
  //   message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  // },
  // {
  //   image: person02,
  //   name: "Allison Holmes",
  //   designation: "Designer",
  //   message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  // },
  // {
  //   image: person01,
  //   name: "Allison Holmes",
  //   designation: "Designer",
  //   message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!",
  // }
]

const Testimonials = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="main-title">
          <span>Testimonials</span>
        </h2>
      </div>

      <div className="grid grid-flow-col gap-4 px-20">

        {test_item?.map((item, i) => (
          <div key={i} item className="col-span-6 p-6 m-6">
            <div className="flex items-center mb-4">
              <img src={item?.image} alt="Image" className="h-16 w-16 rounded-full m-6" />
              <div>
                <h3 className='text-xl font-semibold text-font-color'>{item?.name}</h3>
                <span className='text-base font-normal text-font-color'>{item?.designation}</span>
              </div>
            </div>
            <div>
              <p>&ldquo;{item?.message}&rdquo;</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonials