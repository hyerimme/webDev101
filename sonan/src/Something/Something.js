import React from 'react'
import './Something.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function something() {
    return (
        <div className="wrapper">
            <div className="product">
                <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/13.jpeg?raw=true"></img>
                <img src='https://github.com/hyerimme/webDev101/blob/main/Week_7/12.jpeg?raw=true'></img>
                <img src='https://github.com/hyerimme/webDev101/blob/main/Week_7/14.jpeg?raw=true'></img>
                <img src='https://github.com/hyerimme/webDev101/blob/main/Week_7/9.jpeg?raw=true'></img>
            </div>
        </div>
    )
}