"use client"
import React, { useState } from "react"

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("")

  return (
    <form action="">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any IP address or domain"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  )
}
