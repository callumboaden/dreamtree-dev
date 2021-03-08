import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import logo from "../images/logo.png"

const ListLink = props => (
  <li className="inline-block font-medium tracking-wide">
    <Link to={props.to} className="text-sm md:text-md uppercase mr-5 md:mr-10">
      {props.children}
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(135, 205, 234, 0.1)" }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center py-7">
          <div className="col-span-2 md:col-span-2 justify-start hidden md:block">
            <img className="mb-0" src={logo} alt="Dreamtree" className="w-24" />
          </div>
          <div className="col-span-1 md:col-span-8 justify-center">
            <ul className="flex text-center justify-center">
              <ListLink to="/contact">Contact Us</ListLink>
              <ListLink to="https://www.instagram.com/dreamtreethailand/?hl=en">
                Instagram
              </ListLink>
              <ListLink to="https://www.facebook.com/dreamtreeth">
                Facebook
              </ListLink>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 justify-self-center md:justify-self-end">
            <p className="text-sm">Copyright © 2021 Dream Tree Thailand</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
