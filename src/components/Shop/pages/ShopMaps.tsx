import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Shop } from '../../../data/shops';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

//shops.tsからインポート
type ShopMapProps = {
  shops: Shop[];
};
const initialPosition: [number, number] = [
  parseFloat(process.env.REACT_APP_DEFAULT_LAT || "35.6812"),
  parseFloat(process.env.REACT_APP_DEFAULT_LNG || "139.7671"),
];
const defaultZoom = parseInt(process.env.REACT_APP_DEFAULT_ZOOM || "13", 10);

const ShopMap: React.FC<ShopMapProps> = ({ shops }) => {
  return (
    <MapContainer center={initialPosition} zoom={defaultZoom} style={{ height: "100vh", width: "100%" }}>
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