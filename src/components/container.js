import React from "react"

export default function Container({ children }) {
  return (
    <div className="m-auto" style={{ width: 1140 }}>
      {children}
    </div>
  )
}
