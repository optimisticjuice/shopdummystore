import { Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { SquareMenu } from 'lucide-react';
import '../assets/styles/navBar.css'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  const count = useSelector((state) => state.counter.cartItems)

  return (
    <nav>
      {/*Laptop Navbar */}
      <div className="navbar-laptop grid grid-cols-3 gap-2 w-full p-3 bg-purple-300 items-center justify-center">
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
      </div>
      {/*Mobile Navbar */}
      <div className="navbar-mobile grid grid-cols-2 w-full p-3 bg-purple-300 items-center justify-center">
        <img
          src="/logo-amazon.svg"
          alt="Amazon Logo"
          className="w-24"
        />
        <div className="flex justify-end">
          <Sheet>
            <SheetTrigger>
              <SquareMenu />
            </SheetTrigger>
            <SheetContent className="flex gap-2 w-[200px] p-2 pt-10 ">
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
              <Button variant="outline">
                <Link to="/cart">Cart</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
