import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import "./style.scss"

import Background from "../../../../images/marble-background.jpg"
import SilverBackground from "../../../../images/silver-background.png"
import DecorItem from "../../../../images/silver-decor-item-1.png"
import DecorItemMin from "../../../../images/silver-decor-item-1-90deg.png"

function Index({ siteData }) {
  const contentBlock = useRef()

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener("resize", updateSize)
      updateSize()
      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }
  const [width, height] = useWindowSize()

  useEffect(() => {})
  return (
    <div className="start">
      <div className="start__content">
        <div className="start__wrapper" ref={contentBlock}>
          <div className="start__row">
            <span className="start__male">{siteData.name_male}</span>
            <span className="start__ampersand">и</span>
            <span className="start__female"> {siteData.name_female}</span>
          </div>
          <div className="start__row">
            <span className="start__postfix">wedding</span>
          </div>
        </div>
      </div>
      <div className="start__background start__wrapper--main">
        <img className="start__background--image" src={Background} alt="" />
        <img
          className="start__background--image"
          src={SilverBackground}
          alt=""
        />
        {width > 600 ? (
          <img className="start__background--square" src={DecorItem} alt="" />
        ) : (
          <img
            className="start__background--square"
            src={DecorItemMin}
            alt=""
          />
        )}
      </div>
    </div>
  )
}

export default Index
