import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </div>
  )
}
