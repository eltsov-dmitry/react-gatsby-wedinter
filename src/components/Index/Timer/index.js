import React, { useEffect, useRef, useState } from "react"
import TimerComponent from "./Timer"
import "./style.scss"
import DecorItem1 from "../../../images/decor-item-3.png"
import DecorItem2 from "../../../images/decor-item-4.png"
import Background from "../../../images/silver-background.png"
import { Parallax } from "react-parallax"
import { isEmpty } from "lodash"
import moment from "moment"

function Timer({ siteData }) {
  const title = "До нашей свадьбы осталось:"
  const date =
    !isEmpty(siteData) && moment(siteData.date.date).format("YYYY/MM/DD")

  return (
    <Parallax bgImage={Background} bgImageAlt="the cat" strength={100}>
      <div className="timer">
        <div className="timer__content">
          <p className="timer__title">{title}</p>
          {date && (
            <div className="timer__component">
              <TimerComponent date={date} />
            </div>
          )}
        </div>
        <div className="timer__squares">
          <div className="timer__squares--item timer__squares--item-1" />
          <div className="timer__squares--item timer__squares--item-2" />
        </div>
        <div className="timer__background">
          {/*<img*/}
          {/*  src={DecorItem1}*/}
          {/*  alt=""*/}
          {/*  className="timer__background--item timer__background--l"*/}
          {/*/>*/}
          {/*<img*/}
          {/*  src={DecorItem2}*/}
          {/*  alt=""*/}
          {/*  className="timer__background--item timer__background--r"*/}
          {/*/>*/}
        </div>
      </div>
    </Parallax>
  )
}

export default Timer
