import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const ListLink = props => (
  <li className="inline-block py-4 md:py-0">
    <Link
      to={props.to}
      className="mr-10 uppercase font-medium text-sm hover:opacity-80"
    >
      {props.children}
    </Link>
  </li>
)

function toggleMenu() {
  const navbar = document.querySelector(".navbar")
  navbar.classList.toggle("hidden")
}

export default function Header() {
  return (
    <header className="pt-4 z-10 relative flex max-w-screen-xl md:py-0 m-auto items-center justify-between mt-5">
      <div className="flex justify-center pl-5 md:pl-0">
        <Link to="/">
          <img src={logo} alt="Dreamtree" className="w-3/4 md:w-full" />
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        type="button"
        class="block md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-5 md:mr-0"
        aria-expanded="false"
      >
        <span class="sr-only">Open menu</span>
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav className="hidden absolute z-90 w-full bg-white md:bg-transparent top-full mt-3 pl-5 md:relative md:top-0 md:block navbar">
        <ul className="flex flex-col md:flex-row justify-center tracking-wide mt-3 z-100">
          <ListLink to="/about">About Us</ListLink>
          <ListLink to="/gallery">Gallery</ListLink>
          <ListLink to="/events">Events</ListLink>
          <ListLink to="/crowdfunding">Crowdfunding</ListLink>
        </ul>
      </nav>
      <a
        style={{ background: "#FF8181" }}
        className="hidden md:inline-block text-center px-4 py-2 rounded-2xl text-sm text-white font-bold uppercase tracking-widest shadow-md hover:opacity-90"
        href="https://www.gofundme.com/f/fund-dream-tree"
        target="_blank"
      >
        Donate
      </a>
    </header>
  )
}
