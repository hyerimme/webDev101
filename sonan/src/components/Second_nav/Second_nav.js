import React from 'react'
import './Second_nav.css'
import { Link } from 'react-router-dom'

export default function Second_nav() {
    return (
        <ul className="Second_nav">
            <li><Link to='/make' className="list">make</Link></li>
            <li>something</li>
            <li>small</li>
            <li>and</li>
            <li>warm</li>
        </ul>

    )
}
