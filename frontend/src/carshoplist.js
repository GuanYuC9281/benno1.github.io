import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarShopList = () => {
  const [cars, setCars] = useState([]);  // 用來儲存車輛資料
  const [loading, setLoading] = useState(true);  // 用來追蹤是否正在加載
  const [error, setError] = useState(null);  // 用來儲存錯誤訊息

  // 用來從 API 獲取車輛資料
  useEffect(() => {
    // 假如還沒有後端 API，可以使用靜態資料來模擬
    const mockData = [
      { id: 1, name: 'Toyota Supra' },
      { id: 2, name: 'Honda Civic' },
      { id: 3, name: 'Mazda RX-7' },
    ];

    setTimeout(() => {
      setCars(mockData);  // 模擬資料加載的過程
      setLoading(false);  // 資料加載完成，更新狀態
    }, 1000);  // 模擬延遲 1 秒

    // 若後端 API 已經可用，可以將以下代碼取消註解
    /*
    axios.get('/api/cars')  // 假設後端 API 路徑是 /api/cars
      .then(response => {
        setCars(response.data);  // 更新狀態，儲存車輛資料
        setLoading(false);  // 資料加載完成
      })
      .catch(error => {
        setError('There was an error fetching the cars data!');  // 更新錯誤狀態
        setLoading(false);  // 資料加載完成，即使出錯
      });
    */
  }, []);  // 空陣列表示只在組件首次渲染時發送請求

  // 顯示加載中狀態
  if (loading) {
    return <div>Loading...</div>;
  }

  // 顯示錯誤訊息
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Car Modifications</h1>
      <ul>
        {cars.map(car => (  // 顯示所有車輛資料
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarShopList;
