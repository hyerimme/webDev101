import React from 'react'
import './SonanBody.css'


export default function SonanBody() {
    return (
        <div className="SonanBody">
            <h1>작고 따뜻한, 손 안의 무언가들 🤲🏻</h1>
            <div className="explain">
                <h3>make something small and warm</h3>
                {/* <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/9.jpeg?raw=true"></img> */}
            </div>
            <div className='sonan_img'>
                <img src='https://github.com/hyerimme/webDev101/blob/main/Week_7/9.jpeg?raw=true'></img>
            </div>
            <div className='wrapper'>
                <li className="explain2">
                    <li>모든 것이 차고 넘치는 이 세상에서 작은 것으로도 따스함을 느끼는 우리가 되기를 바라며,<br></br>
                        작고 따뜻한, 손 안의 무언가들. 소난입니다.
                    </li><br></br>
                    <li className='explain3'>
                        <li>소난의 모든 제품들은 개인 작업실에서 수작업으로 직접 제작하고 있습니다.<br></br>
                            때문에 소난의 제품들은 늘 소량으로 제작되고 있음을 확인 부탁드립니다.
                        </li>
                        <li>수작업의 특성상 제품의 사이즈는 1cm 이내의 오차가 있을 수 있고, 세부적인 무늬도 제품마다 약간 차이가 있을  수 있습니다. <br></br>
                            매트유약의 특성상 착색이 쉬운 차나 커피류등은 사용 후 바로 부드러운 스펀지로 세척해 주시고, 긁히기 쉬운 수세미나 포크의 사용은 자제해주세요.<br></br>
                            잘 관리해주는 만큼 오랫동안 예쁘게 사용하실 수 있습니다.
                        </li>
                        <li>소난의 제품들은 식품 안전 유약으로 처리되고 있습니다.<br></br>
                            모든 항목들은 "주문 제작"으로 표시되며 제품 상세 설명에 언급 된 시간 내에 배송됩니다.<br></br>
                            🤲🏻</li>
                    </li>
                </li>
            </div>
        </div>

    )

}