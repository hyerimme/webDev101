import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="sonan"><img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/sonan_remove.png?raw=true"></img></div>
        <div className="member">member</div>
      </header>
      <nav>
        <ul className="nav">
          <li style={{ textDecoration: 'none' }}>SONAN</li>
          <li style={{ textDecoration: 'none' }}>SHOP</li>
          <li style={{ textDecoration: 'none' }}>CUSTOMER</li>
        </ul>
      </nav>

      <ul className="second_nav">
        <li style={{textDecoration: 'none'}}>make</li>
        <li style={{ textDecoration: 'none' }}></li>
        <li style={{ textDecoration: 'none' }}>small</li>
        <li style={{ textDecoration: 'none' }}>and</li>
        <li style={{ textDecoration: 'none' }}>warm</li>
      </ul>

      <div className="wrapper">
        <div className="product">
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/1%20.png?raw=true"></img>
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/2%20.png?raw=true"></img>
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/3.jpeg?raw=true" ></img>
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/4%20.png?raw=true"></img>
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/5.jpeg?raw=true"></img>
          <img src="https://github.com/hyerimme/webDev101/blob/main/Week_7/6.png?raw=true"></img>
        </div>
      </div>

      <div className="information">
        상호:소난 대표:이혜림 주소:06790 서울특별시 서초구 동산로 14길 58 사업자등록번호:374-64-00335 문의전화:010 2755 6954
      </div>
      adsadsa
    </div>

  );
}

export default App;
