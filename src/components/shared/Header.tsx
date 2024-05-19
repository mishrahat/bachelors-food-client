import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="flex justify-between py-6">
      <Link className="text-3xl font-bold tracking-tight text-red-950" to={"/"}>
        Bachelors
      </Link>
      <MainNav />
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
