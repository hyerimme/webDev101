import React from 'react'
import './SonanBody.css'


export default function SonanBody() {
    return (
        <div className="SonanBody">
            <h1>작고 따뜻한, 손 안의 무언가들 -</h1>
            <div className="explain">
                <h3>make something small and warm</h3>
                {/* <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/9.jpeg?raw=true"></img> */}
            </div>
            <div className='sonan_img'>
                <img src='https://github.com/hyerimme/webDev101/blob/main/Week_7/9.jpeg?raw=true'></img>
            </div>
            <li className="explain2">
                <li>모든 것이 차고 넘치는 이 세상에서 작은 것으로도 따스함을 느끼는 우리가 되기를 바라며,<br></br>
                    작고 따뜻한, 손 안의 무언가들.<br></br>
                    <br></br>소난입니다 .
                </li>

            </li>
        </div>

    )

}