"use client"

import { IpInfo } from "@/types/types"
import React, { createContext, ReactNode, useEffect, useState } from "react"

// const IPIFY_API_KEY = "at_Ssbm0DWfFoqoekgijjQGJL15KehTt"

const defaultIpInfo: IpInfo = {
  ip: "",
  location: {
    country: "",
    region: "",
    city: "",
    postalCode: "",
    lat: 0,
    lng: 0,
    timezone: "",
    geonameId: 0,
  },
  isp: "",
}

export const IpContext = createContext<IpInfo>(defaultIpInfo)

export const IpProvider = ({ children }: { children: ReactNode }) => {
  const [ipInfo, setIpInfo] = useState<IpInfo>(defaultIpInfo)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipRes.json()
        const ip = ipData.ip
        const geoRes = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPIFY_API_KEY}&ipAddress=${ip}`
        )
        const geoData = await geoRes.json()
        setIpInfo(geoData)
        console.log("IP Info:", geoData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return <IpContext.Provider value={ipInfo}>{children}</IpContext.Provider>
}
