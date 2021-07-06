import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export class NavBar extends Component {
  render() {
    return (
      <header className="bg-gray-800 text-white z-50 fixed w-screen">
        <div className="container mx-auto flex justify-between">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-400"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-400 text-4xl tracking-widest">
            Geoff Nowak
          </NavLink>
          <nav className="flex">
            <NavLink
              to="/about"
              activeClassName="text-gray-400"
              className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400">
              About Me!
            </NavLink>
            <NavLink
              to="projects"
              activeClassName="text-gray-400"
              className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400">
              Projects
            </NavLink>
            <NavLink
              to="resume"
              activeClassName="text-gray-400"
              className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400">
              Resume
            </NavLink>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar
