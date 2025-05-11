import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarShopList from './CarShopList';  // 引入 CarShopList 組件

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarShopList />} /> {/* 路由到 CarShopList 頁面 */}
      </Routes>
    </Router>
  );
}

export default App;
