import { Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value)

  return (
    <nav className="grid grid-cols-3 gap-2 w-full p-3 bg-purple-300 items-center justify-center">
      <img
        src="/logo-amazon.svg"
        alt="Amazon Logo"
        className="w-24"
      />
      <div className="flex justify-center space-x-6">
        <Button variant="outline">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="outline">
          <Link to="/products">Products</Link>
        </Button>
        <Button variant="outline">
          <Link to="/about">About</Link>
        </Button>
        <Button variant="outline">
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
      <div className="col-start-3 flex justify-end">
        <Link to="/cart" className="relative flex items-center">
          <PiShoppingCartSimple className="size-9" color="purple" />
          <span className="absolute ml-5 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-bold pointer-events-none">
            {count}
          </span>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
