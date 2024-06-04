export const headerData = 
{
    text: "Создадим меню вместе",
    href: "#",
};

export const beginButton = {
    title: "Сгенерировать",
    href: "#",
    isPrimary: false,
 }
 export const restartButton = {
    alt: "restart",
    src: "./assets/img/restart.svg",
    href: "#beginning_of_menu",
 }
export const breakfastData = 
    {
        title: "Завтрак",
        products:
        [
            {data: "Пшенка", gr: "130 грамм"},
            {data: "Банан", gr: "1 штука"},
            {data: "Грецкий орех", gr: "25 грамм"},
            {data: "Хлеб пшеничный", gr: "1 ломтик"},
        ],
    }
export const lunchData = 
    {
        title: "Обед",
        products:
        [
            {data: "Курица (вареная)", gr: "100 грамм"},
            {data: "Картофель (вареный)", gr: "60 грамм"},
            {data: "Помидор", gr: "1 штука"},
            {data: "Хлеб пшеничный", gr: "1 ломтик"},
        ],
    }
export const dinnerData =     
    {
        title: "Ужин",
        products:
        [
            {data: "Творог", gr: "135 грамм"},
            {data: "Банан", gr: "1 штука"},
            {data: "Грецкий орех", gr: "22 грамм"},
            {data: "Хлеб пшеничный", gr: "1 ломтик"},
        ],
    }
export const breakData = 
{
        title: "Перекус",
        products:
        [
            {data: "Помидор", gr: "1 штука"},
            {data: "Огурец", gr: "1 штука"},
        ],
}

export const beginMenuData = {
    headerData,
    beginButton, 
    breakfastData,
    lunchData,
    dinnerData,
    breakData,
    restartButton
 };


 export default beginMenuData;