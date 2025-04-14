import React, { useState } from 'react';

import { shops as initialShops, Shop } from './data/shops';
import ShopForm from './components/Shop/form/ShopForm';
import ShopMap from './components/Shop/pages/ShopMaps';

function App() {
  const [shops, setShops] = useState<Shop[]>(initialShops);

  const handleAddShop = (newShop: Omit<Shop, 'id'> & { latitude: number; longitude: number }) => {
    const shopWithId: Shop = { ...newShop, id: Date.now() };
    setShops([...shops, shopWithId]);
  };

  return (
    <div className="app-container">
      <ShopForm onSubmitData={handleAddShop} />
      <ShopMap shops={shops} />
    </div>
  );
}

export default App;