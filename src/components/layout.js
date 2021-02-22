import React from "react"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div className="m-auto" style={{ maxWidth: 650 }}>
      <Header></Header>
      {children}
    </div>
  )
}
