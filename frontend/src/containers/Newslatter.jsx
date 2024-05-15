import React from 'react';
import bg from "../assets/images/bg_1.jpg";

const Newslatter = () => {


  return (
    <div className="relative">
      <img src={bg} alt="" className='h-96 w-full' />
      <div className="container absolute top-0 left-0 items-center flex justify-evenly">
        <div className="lag:col-span-7">
          <h2>Subscribe to us!</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
        </div>
        <div className="lg:col-span-5">
          <form action="" className="flex">
            <input type="text" className="rounded mr-2 py-3" placeholder="Enter your email" />
            <button className="btn-style" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newslatter