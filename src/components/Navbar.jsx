import React from 'react'

const Navbar = ({ setShowPage }) => {
  return (
    <nav className="navbar bg-grad text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-grad rounded-box w-52">
            <li>
              <p onClick={() => setShowPage('view')}>View Task</p>
            </li>

            <li>
              <p onClick={() => setShowPage('add')}>Add Task</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p onClick={() => setShowPage('view')}>View Task</p>
          </li>

          <li>
            <p onClick={() => setShowPage('add')}>Add Task</p>
          </li>
        </ul>
      </div>
      <div className="navbar-end opacity-0">
        <a className="btn">Button</a>
      </div>
    </nav>
  )
}

export default Navbar
