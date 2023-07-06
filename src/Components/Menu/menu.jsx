import React from 'react'
import Search from '../Search/search'
import Header from '../Header/header'
import './style.css'

export default function menu() {
  return (<>
    <Header />
    <div className="box">
      <div className="searchbox">
        <Search lang="Target Language" text="Enter the text to translate" />
      </div>
    </div>
  </>)
}