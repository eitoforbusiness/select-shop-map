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

  const onSubmit = async (data: FormData) => {
    const query = encodeURIComponent(`${data.address}, Japan`);
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const result = await response.json();

    if (result.length === 0) {
      alert("住所が見つかりませんでした。");
      return;
    }

    const id = Date.now();
    onSubmitData({
      id,
      name: data.name,
      brands: data.brands.split(',').map((brand) => brand.trim()),
      latitude: parseFloat(result[0].lat),
      longitude: parseFloat(result[0].lon),
    });
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