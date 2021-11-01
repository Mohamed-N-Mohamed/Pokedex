import React from 'react'

const Header = () => {
  return (
    <div className="header bg-black p-2 text-white">
      <nav className="py-2">
        <ul className="flex just justify-center item-center">
          <li className="px-4">Home</li>
          <li>Login</li>
          <li className="px-4">Register</li>

        </ul>
      </nav>
    </div>
  )
}

export default Header
