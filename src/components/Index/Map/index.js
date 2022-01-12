import React, { useEffect } from "react"

const DG = typeof window !== `undefined` ? require("2gis-maps") : null
// import DG from "2gis-maps"
import Title from "../UI/Title/Item-2"

import "./style.scss"
import Icon from "../../../images/map.svg"
import { isEmpty } from "lodash"

function Index({ siteData }) {
  const mapPayload = siteData.map_props

  const getBalloonBody = (name, address, link) => {
    return `
    <div class="balloon">
        <div class="balloon__name">${name}</div>
        <div class="balloon__address">${address}</div>
        <a class="balloon__link" target="_blank" href="${link}">Открыть в 2ГИС</a>
    </div>
    `
  }

  useEffect(() => {
    if (!isEmpty(siteData)) {
      DG.then(function () {
        const map = DG.map("map-container", {
          center: [
            mapPayload.options.center.lat,
            mapPayload.options.center.lng,
          ],
          zoom: mapPayload.options.zoom,
        })

        mapPayload.markers.forEach(marker => {
          DG.marker([marker.lat, marker.lng])
            .addTo(map)
            .bindPopup(getBalloonBody(marker.name, marker.address, marker.link))
        })
      })
    }
  }, [siteData])
  return (
    <div className="map">
      <Title label="На карте" icon={Icon} />
      <div className="map__item" id="map-container" />
    </div>
  )
}

export default Index
