import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <p className="hover:text-amber-600">
        Welcome to ShopReact! You will be redirected to the Products Page
        shortly
        <NavLink to="/products" className="text-blue-500 hover:underline">
          Products Page
        </NavLink>
      </p>
    </div>
  );
};

export default Home;
