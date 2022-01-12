import React from "react"
import "./style.scss"
import Background from "../../../../images/undericon-2.png"

function Index({ label, icon }) {
  return (
    <h3 className="title">
      <div className="title__image">
        <img className="title__image--icon" src={icon} alt={label} />
        <img
          className="title__image--background"
          src={Background}
          alt="Icon background"
        />
      </div>
      <span className="title__label">{label}</span>
    </h3>
  )
}

export default Index
