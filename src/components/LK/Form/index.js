import React, { useState } from "react"
import "./style.scss"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import AddIcon from "@mui/icons-material/Add"
import Typography from "@mui/material/Typography"
import axios from "axios"

function Index({ guestsState, setGuestsState }) {
  const [appeal, setAppeal] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const formSend = async () => {
    const user = new URLSearchParams()
    user.append("month_uid", "4c708acc-33ae-4523-a662-deb3a84f46a9")
    // user.append("appeal", appeal)
    user.append("name", name)
    user.append("description", description)

    const guests = await axios.post(
      "https://backend.wedinter.ru/api/user",
      user
    )

    setGuestsState([...guestsState, guests.data])
    setOpen(false)
  }

  return (
    <div className="form">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        className="form__button"
      >
        Добавить гостя
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить нового гостя</DialogTitle>
        {/*<DialogContent>*/}
        {/*  <DialogContentText>*/}
        {/*    Обращение к одному или нескольким гостям.*/}
        {/*    <Typography variant="caption" display="block" gutterBottom>*/}
        {/*      Например: Дорогой, Дорогая, Родные, Любимые*/}
        {/*    </Typography>*/}
        {/*  </DialogContentText>*/}
        {/*  <TextField*/}
        {/*    autoFocus*/}
        {/*    margin="dense"*/}
        {/*    id="appeal"*/}
        {/*    label="Обращение"*/}
        {/*    type="text"*/}
        {/*    fullWidth*/}
        {/*    variant="standard"*/}
        {/*    value={appeal}*/}
        {/*    onChange={e => setAppeal(e.target.value)}*/}
        {/*  />*/}
        {/*</DialogContent>*/}
        <DialogContent>
          <DialogContentText>
            Имя которое будет отображено на сайте.
            <Typography variant="caption" display="block" gutterBottom>
              Например: Иван, Ирина, Семён и Оксана
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Имя на сайте"
            type="name"
            fullWidth
            variant="standard"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Расшифровка для вас.
            <Typography variant="caption" display="block" gutterBottom>
              Иванов и Ирин может быть много и что бы вы не запутались укажите
              их фамилию.
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Расшифровка"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={formSend} variant="contained">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Index
