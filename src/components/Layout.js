import React from 'react'
import '../styles/global.css'
import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        { children }
    </div>
  )
}
