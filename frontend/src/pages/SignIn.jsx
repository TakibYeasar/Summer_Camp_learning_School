import React from 'react';

const SignIn = () => {
  return (
    <div className="container">
      <ul className="flex list-unstyled">
        <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
        <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Sign In</a></li>
      </ul>

      <div className="mt-4 mb-4 bg-card-bg p-8 grid grid-cols-12">
        <div className="col-span-6">
          <h4 className="main-title">Sign in</h4>
          <p className="">Hello, Welcome to your account.</p>
          <form className="" role="form">
            <div className="grid mr-8">
              <label className="">Email Address <span>*</span></label>
              <input type="email" className="p-4 mt-4 mb-4" />
            </div>
            <div className="grid mr-8">
              <label className="">Password <span>*</span></label>
              <input type="password" className="p-4 mt-4 mb-4" />
            </div>
            <div className="">
              <label>
                <input type="radio" />Remember me!
              </label>
              <a href="#" className="">Forgot your Password?</a>
            </div>
            <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Login</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default SignIn