import React from "react"

export default function Container({ children }) {
  return (
    <div className="m-auto px-4" style={{ maxWidth: 1140 }}>
      {children}
    </div>
  )
}
