import React from "react"
import Search from "./Search"

export default function Header() {
  return (
      <header>
          <div className="container">
              <h1>IP Address Tracker</h1>
              <Search></Search>
          </div>
      </header>
  )
}
