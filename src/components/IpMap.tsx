"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "@/utils/leafletFix" // Patch the icons
import { IpMapProps } from "@/types/types"

export default function IpMap({ ipInfo }: IpMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || !ipInfo.latitude || !ipInfo.longitude) return

    // Prevent multiple initializations (important for hot reloads)
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
    }

    const map = L.map(mapRef.current).setView([ipInfo.latitude, ipInfo.longitude], 13)
    mapInstanceRef.current = map

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([ipInfo.latitude, ipInfo.longitude])
      .addTo(map)
      .bindPopup(`📍 ${ipInfo.city}, ${ipInfo.country_name || ""}<br/>IP: ${ipInfo.ip || "N/A"}`)
      .openPopup()
  }, [ipInfo])

  return <div id="map" ref={mapRef} />
}
