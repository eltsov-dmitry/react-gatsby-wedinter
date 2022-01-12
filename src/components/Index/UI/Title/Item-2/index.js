import React from "react"
import "./style.scss"

function Index({ label, icon }) {
  return (
    <h3 className="title">
      <span className="title__label">{label}</span>
    </h3>
  )
}

export default Index
