import React from "react"
import "./style.scss"
import CircularProgress from "@mui/material/CircularProgress"

function Index({ label, color, loading }) {
  return (
    <button className={`ui-button ${color}`}>
      {loading ? <CircularProgress size={30} color="inherit" /> : label}
    </button>
  )
}

export default Index
