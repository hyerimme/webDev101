import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="App">

            <header className="App-header">
                <Link to='/' className="sonan">
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/sonan_remove.png?raw=true"></img>
                </Link>
                <div className="member">
                    <Link to='/member' className="member">member
                    </Link>
                </div>

            </header>
        </div>
    )
}
