import React from "react"
import "./style.scss"

function Index({ ImageL, ImageR }) {
  return (
    <div className="ui__background">
      <img
        src={ImageL}
        alt=""
        className="ui__background--item ui__background--l"
      />
      <img
        src={ImageR}
        alt=""
        className="ui__background--item ui__background--r"
      />
    </div>
  )
}

export default Index
