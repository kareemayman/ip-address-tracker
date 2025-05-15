import React from "react"

export default function Info() {
  return (
    <div className="info">
      <div className="ip">
        <h5>IP ADDRESS</h5>
        <h2>192.212.174.101</h2>
      </div>

      <div className="location">
        <h5>LOCATION</h5>
        <h2>Brooklyn, NY 10001</h2>
      </div>

      <div className="timezone">
        <h5>TIMEZONE</h5>
        <h2>UTC-05:00</h2>
      </div>

      <div className="isp">
        <h5>ISP</h5>
        <h2>SpaceX Starlink</h2>
      </div>
    </div>
  )
}
