import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import logo from "../images/logo.png"

const ListLink = props => (
  <li className="inline-block font-medium tracking-wide">
    <Link to={props.to} className="mr-10 uppercase">
      {props.children}
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(135, 205, 234, 0.1)" }}>
      <Container>
        <div className="flex justify-between items-center py-10">
          <div className="w-3/12">
            <img className="mb-0" src={logo} alt="Dreamtree" />
          </div>
          <div className="w-6/12 flex justify-center">
            <ul className="flex-col flex md:flex-row">
              <ListLink to="/contact">Contact Us</ListLink>
              <ListLink to="#">Instagram</ListLink>
              <ListLink to="#">Facebook</ListLink>
            </ul>
          </div>
          <div className="w-3/12 flex flex-col items-end">
            <p>Copyright © 2021</p>
            <p>Dream Tree Thailand</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
