import useDarkMode from "../hooks/useDarkMode";

const TopNavigation = () => {
  return (
    <div className="top-navigation gap-10 pl-10 pr-10">
      <Title />
      <Search />
      <ThemeIcon />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <p className=" dark:text-white">Toggle Light</p>
      ) : (
        <p className="text-black">Toggle Dark</p>
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
  </div>
);
const Title = () => <h5 className="title-text dark:text-black">tailwind-css</h5>;

export default TopNavigation;
