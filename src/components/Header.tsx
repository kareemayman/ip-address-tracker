import React from "react"
import Search from "./Search"
import Info from "./Info"

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>IP Address Tracker</h1>
        <Search></Search>
        <Info></Info>
      </div>
    </header>
  )
}
