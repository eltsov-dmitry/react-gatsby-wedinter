import React, { useEffect, useState } from "react"
import "./style.scss"
import axios from "axios"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"

function Index({ siteUrl, setGuestsState, guestsState }) {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  const tableMap = [
    {
      value: "label",
      label: "Имя",
    },
    {
      value: "isVisit",
      label: "Подтверждение",
    },
  ]

  const getIsVisitLabel = value => {
    if (value === true) {
      return "Да"
    } else if (value === false) {
      return "Нет"
    } else {
      return ""
    }
  }

  const removeGuest = async uid => {
    const guests = await axios.delete(
      `https://backend.wedinter.ru/api/user/${uid}`
    )
    setGuestsState(guests.data)
    console.log(`Guest is removed: ${uid}`)
    console.log(guests)
  }

  return (
    <div className="table">
      <div
        className="table__header table__row"
        style={{ gridTemplateColumns: `repeat(${tableMap.length + 3}, 1fr)` }}
      >
        <div className="table__header--item table__col">№</div>
        {tableMap.map(item => (
          <div className="table__header--item table__col" key={item.value}>
            {item.label}
          </div>
        ))}
        <div className="table__header--item table__col">Ссылка</div>
        <div className="table__header--item table__col">Удалить</div>
      </div>
      <div className="table__body">
        {guestsState.map((guest, index) => (
          <div
            className="table__body--item table__row"
            key={guest.uid}
            style={{
              gridTemplateColumns: `repeat(${tableMap.length + 3}, 1fr)`,
            }}
          >
            <div className="table__col">{index + 1}</div>
            <div className="table__col">{`${guest.name} (${guest.description})`}</div>
            <div className="table__col">{getIsVisitLabel(guest.is_visit)}</div>
            <div className="table__col">
              <CopyToClipboard text={`${siteUrl}/?${guest.uid}`}>
                <button
                  onClick={() => setOpen(true)}
                  className="table__button table__button--copy"
                >
                  Копировать
                </button>
              </CopyToClipboard>
            </div>
            <div className="table__col">
              <button
                className="table__button table__button--remove"
                onClick={() => removeGuest(guest.uid)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Ссылка скопирована в буфер обмена
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Index
