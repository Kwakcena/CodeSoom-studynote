import React from 'react';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) (1과 2 모두 완료된 경우)

function RegionsContainer() {
  return null;
}

function CategoriesContainer() {
  return null;
}
function RestaurantsContainer() {
  return null;
}

export default function App() {
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
