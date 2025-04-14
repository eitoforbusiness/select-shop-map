import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Shop } from '../../../data/shops';

//shops.tsからインポート
type ShopMapProps = {
  shops: Shop[];
};

const ShopMap: React.FC<ShopMapProps> = ({ shops }) => {
  return (
    <MapContainer center={[35.665, 139.700]} zoom={14} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map(shop => (
        <Marker key={shop.id} position={[shop.latitude, shop.longitude]}>
          <Popup>
            <strong>{shop.name}</strong><br />
            ブランド: {shop.brands.join(", ")}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ShopMap;