// import React, { useEffect, useRef } from "react"
// import "./flip.min.css"
// import "./Timer.scss"
// if (typeof window !== `undefined`) {
//   const Tick = require("./flip.min")
// }
//
// function Timer({ date }) {
//   const tickRef = useRef()
//   const tickWrapper = useRef()
//
//   useEffect(() => {
//     const tickInstance = Tick.DOM.create(tickRef.current, {
//       value: 0,
//     })
//
//     const counter = Tick.count.down(date)
//     counter.onupdate = value => {
//       tickInstance.value = value
//     }
//   }, [date, Tick])
//   return (
//     <div ref={tickRef}>
//       <div className="flip-custom" data-repeat="true" aria-hidden="true">
//         <span
//           ref={tickWrapper}
//           className="flip-custom__items"
//           data-view="flip"
//         />
//       </div>
//     </div>
//   )
// }
//
// export default Timer

import React from "react"

if (typeof window !== `undefined`) {
  const Tick = require("./flip.min")
}
// import Tick from "./flip.min"
import "@pqina/flip/dist/flip.min.css"
import "./Timer.scss"
import { isEmpty } from "lodash"

export default class Flip extends React.Component {
  constructor(props) {
    super(props)
    this._tickRef = React.createRef()
  }

  componentDidMount() {
    const labelMap = ["Дней", "Часов", "Минут", "Секунд"]

    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.props.date,
    })

    const counter = Tick.count.down(this.props.date)
    counter.onupdate = value => {
      this._tickInstance.value = value.map((item, index) => ({
        value: item,
        label: labelMap[index],
      }))
    }
  }

  componentDidUpdate() {
    if (!this._tickInstance) return
    this._tickInstance.date = this.props.date
  }

  componentWillUnmount() {
    if (!this._tickInstance) return
    Tick.DOM.destroy(this._tickRef.current)
  }

  render() {
    return (
      <div ref={this._tickRef} className="tick">
        <div
          data-repeat="true"
          data-layout="horizontal center fit"
          className="flip-custom"
        >
          <div className="tick-group flip-custom__items">
            <div
              data-key="value"
              data-repeat="true"
              className="flip-custom__item"
            >
              <span data-view="flip" />
            </div>

            <span
              data-key="label"
              data-view="text"
              className="flip-custom__labels"
            />
          </div>
        </div>
      </div>
    )
  }
}
