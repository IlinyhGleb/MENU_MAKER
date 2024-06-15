
export const categories = [
    {
      id: 1,
      name: "Каши"
    },
    {
      id: 2,
      name: "Крупы"
    },
    {
        id: 3,
        name: "Мясо и рыба"
    },
    {
        id: 4,
        name: "Фрукты"
    },
    {
        id: 5,
        name: "Орехи"
    },
    {
        id: 6,
        name: "Мучное"
    },
    {
        id: 7,
        name: "Молочные продукты"
    },
    {
        id: 8,
        name: "Овощи"
    }
  ];

export const mybuttonsData = [
    {
        name: "В личный кабинет",
        href: "/account",
        isPrimary:false
    },
    {
        name: "Сгенерировать!",
        href: "#",
        isPrimary:true
    }
];


  export const addProductsData={
    categories,
    mybuttonsData
  }
  export default addProductsData;