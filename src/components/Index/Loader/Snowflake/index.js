import React from "react"
import "./style.scss"
import Snowflake from "../../../../images/snowflake.svg"

function Index(props) {
  return (
    <div className="loader">
      <img src={Snowflake} alt="loading" className="loader__item" />
    </div>
  )
}

export default Index
