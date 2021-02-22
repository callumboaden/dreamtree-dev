import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const ListLink = props => (
  <li className="inline-block">
    <Link to={props.to} className="mr-10 uppercase">
      {props.children}
    </Link>
  </li>
)

export default function Header() {
  return (
    <header className="mt-4">
      <div className="flex justify-center">
        <Link to="/">
          <img src={logo} alt="Dreamtree" />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center tracking-wide">
          <ListLink to="/about-us">About Us</ListLink>
          <ListLink to="/gallery">Gallery</ListLink>
          <ListLink to="/events">Events</ListLink>
          <ListLink to="/crowdfunding">Crowdfunding</ListLink>
        </ul>
      </nav>
    </header>
  )
}
