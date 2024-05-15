import React from 'react'

const SignUp = () => {
  return (
    <div className="container">
      <ul className="flex list-unstyled">
        <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
        <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Sign Up</a></li>
      </ul>

      <div className="mt-4 mb-4 bg-card-bg p-8 grid grid-cols-12">
        <div className="col-span-6">
          <h4 className="main-title">Sign in</h4>
          <p className="">Hello, Welcome to your account.</p>
          <div className="col-span-6">
            <h4 className="main-title">Create a new account</h4>
            <form className="">
              <div className="grid mt-2 mb-2">
                <label className="text-base mt-2 mb-2">Email Address <span>*</span></label>
                <input type="email" className="p-4 mt-4 mb-4" placeholder="email" />
              </div>
              <div className="grid mt-2 mb-2">
                <label className="text-base mt-2 mb-2">Username <span>*</span></label>
                <input type="email" className="p-4 mt-4 mb-4" placeholder="username" />
              </div>
              <div className="grid mt-2 mb-2">
                <label className="text-base mt-2 mb-2">Password <span>*</span></label>
                <input type="email" className="p-4 mt-4 mb-4" placeholder="password" />
              </div>
              <div className="grid mt-2 mb-2">
                <label className="text-base mt-2 mb-2">Confirm Password <span>*</span></label>
                <input type="email" className="p-4 mt-4 mb-4" placeholder="confirm_password" />
              </div>
              <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Sign Up</button>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default SignUp