import React from 'react'
import './Images.css'
import { Routes, Route } from 'react-router-dom'
import SonanBody from '../SonanBody/SonanBody'

export default function Images() {
    return (

        <div className="wrapper">
            <div className="product">
                {/* <Routes> */}
                    {/* <Route path="/SonanBody" eliment={<SonanBody />} /> */}
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/1%20.png?raw=true"></img>
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/2%20.png?raw=true"></img>
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/3.jpeg?raw=true" ></img>
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/4%20.png?raw=true"></img>
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/5.jpeg?raw=true"></img>
                    <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/6.png?raw=true"></img>
                {/* </Routes> */}
            </div>
        </div>
    )
}