import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  );
}
export default Navbar;
