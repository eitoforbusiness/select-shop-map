import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  address: string;
  brands: string;
};

type ShopFormProps = {
  onSubmitData: (data: { id: number; name: string; brands: string[]; latitude: number; longitude: number }) => void;
};

const ShopForm: React.FC<ShopFormProps> = ({ onSubmitData }) => {
  const { register, handleSubmit } = useForm<FormData>();

  // Google Maps Geocoding API を使用したジオコーディング関数
  const geocodeAddress = async (address: string) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // ここに取得した API キーを入力
    const query = encodeURIComponent(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Geocoding API の呼び出しに失敗しました");
    }
    const result = await response.json();
    if (result.status !== "OK" || result.results.length === 0) {
      throw new Error("住所が見つかりませんでした");
    }
    const location = result.results[0].geometry.location;
    return {
      latitude: location.lat,
      longitude: location.lng,
    };
  };

  const onSubmit = async (data: FormData) => {
    try {
      const { latitude, longitude } = await geocodeAddress(data.address);
      const id = Date.now();
      onSubmitData({
        id,
        name: data.name,
        brands: data.brands.split(',').map((brand) => brand.trim()),
        latitude,
        longitude,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="shop-form">
      <input {...register("name", { required: true })} placeholder="ショップ名" />
      <input {...register("address", { required: true })} placeholder="住所" />
      <input {...register("brands")} placeholder="ブランド（カンマ区切り）" />
      <button type="submit">追加</button>
    </form>
  );
};

export default ShopForm;