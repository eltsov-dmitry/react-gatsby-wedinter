import * as React from "react"
import Seo from "../components/seo"

import Loader from "../components/Index/Loader/Snowflake"
import Start from "../components/Index/Start/Empty"
import Text from "../components/Index/Text/Item-2"
import Timer from "../components/Index/Timer"
import Event from "../components/Index/Events/Item-2"
import Colors from "../components/Index/Colors"
import Map from "../components/Index/Map"
import Contacts from "../components/Index/Contacts"
import { useEffect, useState } from "react"
import axios from "axios"

const IndexPage = props => {
  const [loading, setLoading] = useState(true)
  const [siteData, setSiteData] = useState({})
  const [userData, setUserData] = useState({})
  const [pageTitle, setPageTitle] = useState("")
  useEffect(() => {
    const siteUid = "4c708acc-33ae-4523-a662-deb3a84f46a9"
    const userUid = props.location.search.replace("?", "")

    const apiSite = `https://backend.wedinter.ru/api/site/${siteUid}`
    const apiUser = `https://backend.wedinter.ru/api/user/${userUid}`

    axios.get(apiSite).then(({ data }) => {
      setSiteData(data)
      setPageTitle(`${data.name_male} и ${data.name_female}`)
    })
    userUid && axios.get(apiUser).then(({ data }) => setUserData(data))

    setTimeout(() => setLoading(false), 1000)
    // setLoading(false)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <div
        className="index-wrapper"
        style={loading ? { opacity: 0 } : { opacity: 1 }}
      >
        <Seo />
        <Start siteData={siteData} />
        <Text userData={userData} siteData={siteData} />
        <Timer siteData={siteData} />
        <Event siteData={siteData} />
        <Colors />
        <Map siteData={siteData} />
        <Contacts siteData={siteData} />
      </div>
      )}
    </>
  )
}

export default IndexPage
