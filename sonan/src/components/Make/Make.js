import React from 'react'
import './Make.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function Make() {
    return (
        <div className="wrapper">
            <div className="product">
                <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/1%20.png?raw=true"></img>
                {/* <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/2%20.png?raw=true"></img> */}
                <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/3.jpeg?raw=true" ></img>
                <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/4%20.png?raw=true"></img>
                <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/5.jpeg?raw=true"></img>
                
            </div>
        </div>
    )
}