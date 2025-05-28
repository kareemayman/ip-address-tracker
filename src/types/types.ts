export type IpInfo = {
  ip: string
  location: {
    city: string
    country: string
    geonameId: number
    lat: number
    lng: number
    postalCode: string
    region: string
    timezone: string
  }
  isp: string
}

export type IpMapProps = {
  ipInfo: {
    latitude: number
    longitude: number
    city?: string
    country_name?: string
    ip?: string
  }
}
