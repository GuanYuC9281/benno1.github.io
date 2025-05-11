import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarShopList from './carshoplist';  // 引入 CarShopList 組件

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/car-shop">Car Shop</Link></li> {/* 新增 Car Shop 頁面的鏈接 */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-shop" element={<CarShopList />} /> {/* 新增 Car Shop 路由 */}
      </Routes>
    </Router>
  );
}

export default App;
