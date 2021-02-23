import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import logo from "../images/logo.png"

const ListLink = props => (
  <li className="inline-block font-medium tracking-wide">
    <Link to={props.to} className="uppercase mr-10">
      {props.children}
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(135, 205, 234, 0.1)" }}>
      <Container>
        <div className="grid grid-cols-12 items-center py-7">
          <div className="col-span-2 justify-start">
            <img className="mb-0" src={logo} alt="Dreamtree" />
          </div>
          <div className="col-span-8">
            <ul className="flex text-center justify-center">
              <ListLink to="/contact">Contact Us</ListLink>
              <ListLink to="#">Instagram</ListLink>
              <ListLink to="#">Facebook</ListLink>
            </ul>
          </div>
          <div className="col-span-2 justify-self-end">
            <p className="text-sm">
              Copyright © 2021
              <br />
              Dream Tree Thailand
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
