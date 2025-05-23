import { IpInfo } from "@/types/types"
import React from "react"

export default async function Info() {
  const ipInfo: IpInfo = await fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
      const ip = data.ip
      return fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ip}`
      )
    })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      return null
    })

  return (
    <div className="info">
      <div className="ip">
        <h5>IP ADDRESS</h5>
        <h2>{ipInfo.ip}</h2>
      </div>

      <div className="location">
        <h5>LOCATION</h5>
        <h2>
          {ipInfo.location.region}, {ipInfo.location.country} {ipInfo.location.postalCode}
        </h2>
      </div>

      <div className="timezone">
        <h5>TIMEZONE</h5>
        <h2>{ipInfo.location.timezone}</h2>
      </div>

      <div className="isp">
        <h5>ISP</h5>
        <h2>{ipInfo.isp}</h2>
      </div>
    </div>
  )
}
