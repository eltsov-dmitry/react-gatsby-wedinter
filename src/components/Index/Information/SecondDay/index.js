import React from "react"
import "./style.scss"

import DecorItem from "../../../../images/decor-item-2.jpg"

function Index(props) {
  return (
    <div className="second-day">
      <div className="second-day__content">
        <div className="second-day__content--title">
          Праздник тот же, день 2ой!
        </div>
        <div className="second-day__content--text">
          <span>Второй день</span> пройдёт на загородной территории{" "}
          <span>Эко-парка «Udacha»</span> по адресу: <br />
          <span>Тюменский район, д. Якуши, переулок Папанина, д.19.</span>
        </div>
      </div>
      <div className="second-day__image">
        <img src={DecorItem} alt="" />
      </div>
    </div>
  )
}

export default Index
