let etalaseToko = [
  {
    id: "ET-1",
    title: "Semua Produk",
    path: "/semua-produk",
  },
  {
    id: "ET-2",
    title: "Produk Terjual",
    path: "/produk-terjual",
  },
  {
    id: "ET-3",
    title: "Preorder",
    path: "/preorder",
  },
  {
    id: "ET-4",
    title: "iPhone dan Aksesoris",
    path: "/iphone-aksesoris",
  },
  {
    id: "ET-5",
    title: "Smartphone Lainnya dan Aksesoris",
    path: "/smartphone-aksesoris",
  },
  {
    id: "ET-6",
    title: "iPad dan Aksesoris",
    path: "/ipad-aksesoris",
  },
  {
    id: "ET-7",
    title: "Tablet Lainnya dan Aksesoris",
    path: "/tablet-aksesoris",
  },
  {
    id: "ET-8",
    title: "Apple Watch dan Aksesoris",
    path: "/apple-watch-aksesoris",
  },
  {
    id: "ET-9",
    title: "Smart Watch Lainnya dan Aksesoris",
    path: "/smart-watch-aksesoris",
  },
  {
    id: "ET-10",
    title: "Macbook dan Aksesoris",
    path: "/macbook-aksesoris",
  },
  {
    id: "ET-11",
    title: "Headset Earphone Speaker",
    path: "/headset-earphone-speaker",
  },
  {
    id: "ET-12",
    title: "Camera dan Aksesoris",
    path: "/camera-aksesoris",
  },
  {
    id: "ET-13",
    title: "Aksesoris",
    path: "/aksesoris",
  },
];

function getAllCategory() {
  return etalaseToko;
}

function getCategory(id) {
  const foundedCategory = etalaseToko.find((item) => item.id === id);
  return foundedCategory;
}

export {
    getAllCategory,
    getCategory,
};