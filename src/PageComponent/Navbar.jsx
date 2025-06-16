import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/cart"}>
        <IoCart />
      </Link>
    </nav>
  );
}
export default Navbar;
