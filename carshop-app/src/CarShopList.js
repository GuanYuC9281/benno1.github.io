import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarShopList = () => {
  const [cars, setCars] = useState([]); // 用來儲存車輛資料
  const [error, setError] = useState(null); // 用來處理錯誤訊息

  // 從後端 API 獲取車輛資料
  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')  // 確保後端已經在 5000 端口運行
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the cars data!", error);
        setError("無法獲取車輛資料，請稍後再試。");
      });
  }, []);

  return (
    <div>
      <h1>Car Modifications</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {cars.length > 0 ? (
            cars.map(car => (
              <li key={car.id}>{car.name}</li>
            ))
          ) : (
            <p>載入中...</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default CarShopList;
