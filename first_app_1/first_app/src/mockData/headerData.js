
export const menuData = [
  {
    title: "О нас",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "Контакты",
    href: "#",
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "/authorization",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "/registration",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: "./assets/img/logo.jpg",
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
