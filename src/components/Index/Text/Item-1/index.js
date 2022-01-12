import React, { useEffect, useState } from "react"
import "./style.scss"

import { isEmpty } from "lodash"
import moment from "moment"
import "moment/locale/ru"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"

import DecorItem1 from "../../../images/list-1.jpg"
import DecorItem2 from "../../../images/list-2.jpg"
import SilverTexture from "../../../images/silver-texture-2.jpg"
import SuccessIcon from "../../../images/couple.svg"
import FailureIcon from "../../../images/sad-heart.svg"
import axios from "axios"

const Text = ({ siteData, userData }) => {
  const [dialogState, setDialogState] = useState(false)
  const [dialogMessage, setDialogMessage] = useState("")
  const [dialogIcon, setDialogIcon] = useState(null)
  const [user, setUser] = useState({
    uid: null,
    appeal: null,
    name: null,
    description: null,
    is_visit: null,
  })
  const dialogHandler = async (uid, state) => {
    if (state) {
      setDialogMessage(
        `Спасибо за подтверждение, будем ждать Вас с нетерпением!`
      )
      setDialogIcon(SuccessIcon)
    } else {
      setDialogMessage(
        `Нам очень жаль, что Вы не сможете присутствовать на нашем празднике.`
      )
      setDialogIcon(FailureIcon)
    }

    const userParams = new URLSearchParams()
    userParams.append("is_visit", String(state))

    await axios.put(`https://backend.wedinter.ru/api/user/${uid}`, userParams)

    setDialogState(true)
  }
  const dialogClose = () => {
    setDialogState(false)
  }
  const date =
    !isEmpty(siteData) && moment(siteData.date.date).format("DD MMMM YYYY года")

  useEffect(() => {
    if (!isEmpty(userData)) {
      console.log(userData)
      setUser(userData)
    }
  }, [userData])

  return (
    <>
      <div className="text">
        <div className="text__content">
          <p className="text__prefix">{user.appeal}</p>
          <p className="text__names">{user.name}</p>
          <p className="text__text">{!isEmpty(siteData) && siteData.text[0]}</p>
          <p
            className="text__date"
            style={{ backgroundImage: `url(${SilverTexture})` }}
          >
            {date}
          </p>
          <p className="text__text">
            {!isEmpty(siteData) && siteData.text[1]} <br />
            {!isEmpty(siteData) && siteData.text[2]} <br />
            {/*{!isEmpty(siteData) && siteData.text[3]}*/}
          </p>
          <div className="text__buttons">
            <button
              className="text__buttons--item text__buttons--success"
              onClick={() => dialogHandler(user.uid, true)}
            >
              Буду обязательно!
            </button>
            <button
              className="text__buttons--item text__buttons--failure"
              onClick={() => dialogHandler(user.uid, false)}
            >
              Не смогу прийти
            </button>
          </div>
        </div>
        <div className="text__background">
          <img
            src={DecorItem1}
            alt=""
            className="text__background--item text__background--l"
          />
          <img
            src={DecorItem2}
            alt=""
            className="text__background--item text__background--r"
          />
        </div>
      </div>
      <Dialog open={dialogState} onClose={dialogClose}>
        <div className="dialog">
          <div className="dialog__message">
            <img src={dialogIcon} className="dialog__icon" />
            <div className="dialog__text">{dialogMessage}</div>
          </div>
          <Button
            className="dialog__button"
            variant="contained"
            onClick={dialogClose}
          >
            Закрыть
          </Button>
        </div>
      </Dialog>
    </>
  )
}

export default Text
