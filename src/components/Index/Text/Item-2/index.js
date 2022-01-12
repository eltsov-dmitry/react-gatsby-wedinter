import React, { useEffect, useState } from "react"
import moment from "moment"
import "moment/locale/ru"
import "./style.scss"
import { isEmpty } from "lodash"
import { StaticImage } from "gatsby-plugin-image"
import SilverTexture from "../../../../images/silver-texture-2.jpg"
import Dialog from "../Dialog"
import axios from "axios"
import SuccessIcon from "../../../../images/couple.svg"
import FailureIcon from "../../../../images/sad-heart.svg"
import Button from "../../UI/Button/Item-1"

function Index({ siteData, userData }) {
  const [loadingSuccess, setLoadingSuccess] = useState(false)
  const [loadingFailure, setLoadingFailure] = useState(false)
  const [dialogState, setDialogState] = useState(false)
  const [dialogMessage, setDialogMessage] = useState({
    icon: null,
    text: "",
  })
  const [user, setUser] = useState({
    uid: null,
    appeal: null,
    name: null,
    description: null,
    is_visit: null,
  })

  const date =
    !isEmpty(siteData) && moment(siteData.date.date).format("DD MMMM YYYY года")
  const text = !isEmpty(siteData) && siteData.text[0]

  const dialogHandler = async (uid, state) => {
    if (uid) {
      if (state) {
        setDialogMessage({
          icon: SuccessIcon,
          text: "Спасибо за подтверждение, будем ждать Вас с нетерпением!",
        })
        setLoadingSuccess(true)
      } else {
        setDialogMessage({
          icon: FailureIcon,
          text: "Нам очень жаль, что Вы не сможете присутствовать на нашем празднике.",
        })
        setLoadingFailure(true)
      }

      const userParams = new URLSearchParams()
      userParams.append("is_visit", String(state))

      await axios.put(`https://backend.wedinter.ru/api/user/${uid}`, userParams)

      setDialogState(true)
      setLoadingSuccess(false)
      setLoadingFailure(false)
    }
  }

  useEffect(() => {
    !isEmpty(userData) && setUser(userData)
  }, [userData])

  return (
    <>
      <div className="text">
        <div className="text__image">
          <StaticImage
            src="../../../../images/silver-heart.jpg"
            alt="Background"
            className="text__image--item"
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
          />
        </div>
        <div className="text__content">
          {/*<div className="text__content--prefix">Дорогие</div>*/}
          <div className="text__content--names">{user.name}</div>
          <div
            className="text__content--date"
            style={{ backgroundImage: `url(${SilverTexture})` }}
          >
            {date}
          </div>
          <div className="text__content--text">{text}</div>
          <div className="text__content--buttons">
            <div
              className="text__content--button"
              onClick={() => dialogHandler(user.uid, true)}
            >
              <Button
                label="Буду обязательно!"
                color="success"
                loading={loadingSuccess}
              />
            </div>
            <div
              className="text__content--button"
              onClick={() => dialogHandler(user.uid, false)}
            >
              <Button
                label="Не смогу прийти"
                color="failure"
                loading={loadingFailure}
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog
        state={dialogState}
        setState={setDialogState}
        message={dialogMessage}
      />
    </>
  )
}

export default Index
