"use client"

import React, { useContext } from "react"
import dynamic from "next/dynamic"
import { IpContext } from "@/context/IpContext"

// Avoid SSR with dynamic import
const IpMap = dynamic(() => import("@/components/IpMap"), {
  ssr: false,
})

export default function Map() {
  const ipInfo = useContext(IpContext)

  const newObj = {
    ip: ipInfo.ip,
    latitude: ipInfo.location.lat,
    longitude: ipInfo.location.lng,
    city: ipInfo.location.city,
    country_name: ipInfo.location.country,
  }

  return <IpMap ipInfo={newObj}></IpMap>
}
