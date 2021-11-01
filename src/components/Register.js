import React from 'react'

const Register = () => {
  return (
    <div className="container mx-auto px-4">
    <form className="login flex flex-col items-center mt-9">
    <div className="form-title">
      <h2 className="text-3xl pb-3">Register</h2>
    </div>

    <div className="form-sub-title">
      <p className="text-base text-center">Please register with a username and password</p>
    </div>

    <div className="form-group p-4 ">
      <input type="text"  placeholder="Username" className="block w-full bg-gray-200 p-4 text-center text-ms rounded-lg text-black mb-4 outline-none focus:ring-1 focus:bg-gray-100"/>
      <input type="password"  placeholder="password" className="block w-full bg-gray-200 p-4 text-center text-ms rounded-lg text-black mb-4 outline-none focus:ring-1 focus:bg-gray-100"/>
      <button type="submit" id="login" className="block bg-black w-full p-3 text-white rounded text-center text-ms">Register</button>
    </div>

  </form>
</div>
  )
}

export default Register
