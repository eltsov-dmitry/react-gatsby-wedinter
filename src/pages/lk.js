import React, { useEffect, useState } from "react"
import Table from "../components/LK/Table"
import Form from "../components/LK/Form"
import axios from "axios"

function Lk(props) {
  const siteUrl = props.location.origin
  const [guestsState, setGuestsState] = useState([])
  useEffect(async () => {
    const gusets = await axios.get(
      "https://backend.wedinter.ru/api/users/4c708acc-33ae-4523-a662-deb3a84f46a9"
    )
    setGuestsState(gusets.data)
  }, [])
  return (
    <div style={{ fontSize: "14px" }}>
      <Form guestsState={guestsState} setGuestsState={setGuestsState} />
      <Table
        setGuestsState={setGuestsState}
        guestsState={guestsState}
        siteUrl={siteUrl}
      />
    </div>
  )
}

export default Lk
