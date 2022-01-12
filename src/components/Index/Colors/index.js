import React from "react"
import Title from "../UI/Title/Item-2"
import "./style.scss"

import Icon from "../../../images/color.svg"

import Silver from "../../../images/silver-texture-2.jpg"

import Image1 from "../../../images/01.jpg"
import Image2 from "../../../images/02.jpg"
import Image3 from "../../../images/03.jpg"
import Image4 from "../../../images/04.jpg"
import Image5 from "../../../images/05.jpg"
import Image6 from "../../../images/06.jpg"

function Index(props) {
  const colors = [
    {
      type: "image",
      value: Silver,
    },
    {
      type: "color",
      value: "#c4b5a1",
    },
    {
      type: "color",
      value: "#d0a67d",
    },
    {
      type: "color",
      value: "#e0cbd0",
    },
    {
      type: "color",
      value: "#ffc6dc",
    },
  ]
  const images = [Image1, Image2, Image3, Image4, Image5, Image6]
  return (
    <div className="colors">
      <Title label="Цветовая гамма" icon={Icon} />
      <div className="colors__subtitle">
        Мы будем рады, если Вы поддержите нашу цветовую гамму. <br />
        Если нет, тоже будем рады, потому что любим Вас любыми!
      </div>
      <div className="colors__wrapper">
        <div className="colors__content">
          {colors.map(color => {
            if (color.type === "color") {
              return (
                <span
                  key={color.value}
                  className="colors__content--item"
                  style={{ backgroundColor: color.value }}
                />
              )
            } else {
              return (
                <div className="colors__content--item" key={color.value}>
                  <img src={color.value} alt="" />
                </div>
              )
            }
          })}
        </div>
        <div className="colors__images">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`image ${index}`}
              className="colors__images--item"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
