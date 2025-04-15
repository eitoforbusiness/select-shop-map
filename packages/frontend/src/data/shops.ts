export interface Shop {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    brands: string[];
  }
  //仮データ
  export const shops: Shop[] = [
    {
      id: 1,
      name: "BEAMS 原宿",
      latitude: 35.667628,
      longitude: 139.708450,
      brands: ["BEAMS", "Ray BEAMS", "International Gallery BEAMS"]
    },
    {
      id: 2,
      name: "UNITED ARROWS 渋谷",
      latitude: 35.659108,
      longitude: 139.700463,
      brands: ["UNITED ARROWS", "monkey time", "District"]
    }
  ];
  