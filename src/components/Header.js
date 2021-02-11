import headerLogo from "../images/around_us_logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={headerLogo} alt="Around the U.S. logo" />
    </header>
  );
}

export default Header;

