import React from "react"
import Title from "../../UI/Title/Item-2"
import Icon from "../../../../images/heart.svg"
import Heart from "../../../../images/heart-color.svg"

import "./style.scss"
import DecorItem1 from "../../../images/decor-item-8.png"
import DecorItem2 from "../../../images/decor-item-7.png"
import { isEmpty } from "lodash"

function Index({ siteData }) {
  const events = !isEmpty(siteData) ? siteData.events : []
  return (
    <div className="event">
      <Title label="Место и время" icon={Icon} />
      <div className="event__content">
        <div className="event__wrapper">
          {events.map(eventItem => (
            <div className="event__item" key={eventItem.time}>
              <div className="event__time">{eventItem.time}</div>
              <div className="event__heart">
                <img src={Heart} alt="Heart icon" />
              </div>
              <div className="event__text">
                <div className="event__label">{eventItem.label}</div>
                <div className="event__description">
                  <div className="event__description--name">
                    {eventItem.place_name}
                  </div>
                  <div className="event__description--address">
                    {eventItem.place_address}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="event__background">
        <img
          src={DecorItem1}
          alt=""
          className="event__background--item event__background--l"
        />
        <img
          src={DecorItem2}
          alt=""
          className="event__background--item event__background--r"
        />
      </div>
    </div>
  )
}

export default Index
