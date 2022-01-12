import React from "react"
import Dialog from "@mui/material/Dialog"
import Button from "../../UI/Button/Item-1"
import "./style.scss"

function Index({ state, setState, message }) {
  const close = () => {
    setState(false)
  }
  return (
    <Dialog open={state} onClose={close}>
      <div className="dialog">
        <div className="dialog__message">
          <img src={message.icon} className="dialog__icon" />
          <div className="dialog__text">{message.text}</div>
        </div>
        <div className="dialog__button" onClick={close}>
          <Button label="Закрыть" color="failure" />
        </div>
        {/*<Button className="dialog__button" variant="contained" >*/}
        {/*  Закрыть*/}
        {/*</Button>*/}
      </div>
    </Dialog>
  )
}

export default Index
