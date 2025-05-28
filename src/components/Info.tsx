"use client"

import { IpContext } from "@/context/IpContext"
import { IpInfo } from "@/types/types"
import React, { useContext } from "react"

export default function Info() {
  const ipInfo = useContext<IpInfo>(IpContext)

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
