import "../styles/style.css";
import Logo from "../media_files/livro.png";
function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo of a book"></img>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#Init">Home</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
