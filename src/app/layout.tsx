import "../scss/main.scss"
import Header from "@/components/Header"
import "leaflet/dist/leaflet.css"
import { IpProvider } from "@/context/IpContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Ip Address Tracker</title>
      </head>
      <body>
        <IpProvider>
          <Header></Header>
          {children}
        </IpProvider>
      </body>
    </html>
  )
}
