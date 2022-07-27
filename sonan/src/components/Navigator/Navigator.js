import React from 'react'
import './Navigator.css'

export default function Navigator() {
  return (
    // <BrowserRouter>
    <div className="Navigator">

      <nav>
        <ul className="nav">
          {/* <Routes> */}
            {/* <li><Link to='SONAN' className="SONAN">SONAN</Link></li> */}
            {/* <Route path="/" eliment={<SONAN />} /> */}
            <li>SONAN</li>
            <li>SHOP</li>
            <li style={{ textDecoration: 'none' }}>CUSTOMER</li>
          {/* </Routes> */}
        </ul>
      </nav>
    </div>
    // </BrowserRouter>
  )
}

