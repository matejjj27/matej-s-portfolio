export const useHomeNavButtons = () => {
  return [
    {
      path: "/about",
      helloText: "Hello.",
      navText: "About",
      isHovered: false,
      isRendered: false
    },
    {
      path: "/work",
      color: "text-green-300",
      helloText: "I am",
      navText: "Work",
      isHovered: false,
      isRendered: false
    },
    {
      path: "/contact",
      color: "text-green-300",
      helloText: "Matej",
      navText: "Contact",
      isHovered: false,
      isRendered: false
    }
  ];
};
