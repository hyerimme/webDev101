import React from 'react'
import './Navigator.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigator() {
  return (

    <div className="Navigator">
      <nav>
        <ul className="nav">
          <li><Link to='/webDev101/sonan' className="list">SONAN</Link></li>
          <li><Link to='/webDev101/' className="list">SHOP</Link></li>
          <li><Link to='/webDev101/customer' className="list">CUSTOMER</Link></li>
        </ul>
      </nav>
    </div>

  )
}

