import React from "react"
import Header from "../components/header"
import Container from "../components/container"

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <Container>{children}</Container>
    </div>
  )
}
