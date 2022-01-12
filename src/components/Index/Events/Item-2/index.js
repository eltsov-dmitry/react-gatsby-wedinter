import React from "react"
import Title from "../../UI/Title/Item-2"
import Icon from "../../../../images/heart.svg"
import Heart from "../../../../images/heart-color.svg"
import HomeIcon from "@mui/icons-material/Home"
import RoomIcon from "@mui/icons-material/Room"

import "./style.scss"
import DecorItem1 from "../../../../images/decor-item-8.png"
import DecorItem2 from "../../../../images/decor-item-7.png"
import { isEmpty } from "lodash"

function Index({ siteData }) {
  const events = !isEmpty(siteData) ? siteData.events : []
  const pad = number => (number < 10 ? `0${number}` : String(number))

  return (
    <div className="event">
      <Title label="Место и время" icon={Icon} />
      <div className="event__cards">
        {events.map((event, index) => (
          <div className="event__card" key={event.label}>
            <div className="event__card--top">
              <div className="event__card--number">{pad(index + 1)}</div>
              <div className="event__card--title">{event.label}</div>
            </div>
            <div className="event__card--middle">
              <div className="event__card--time">{event.time}</div>
            </div>
            <div className="event__card--bottom">
              <div className="event__card--place">
                <HomeIcon className="event__card--placeicon" />
                <div className="event__card--placename">{event.place_name}</div>
              </div>
              <div className="event__card--place">
                <RoomIcon className="event__card--placeicon" />
                <div className="event__card--placename">
                  {event.place_address}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
