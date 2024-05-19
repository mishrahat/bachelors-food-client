import { Link } from "react-router-dom";
import Search from "../Search";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import UserMenu from "../UserMenu";

const MainNav = () => {
  const { loginWithRedirect, user } = useAuth0();
  return (
    <div className=" lg:flex gap-20 items-center hidden">
      <Search
        type="text"
        placeholder="Search By Location"
        buttonText="Search"
      />
      <Link className="text-2xl font-bold tracking-tight" to={"/"}>
        Home
      </Link>
      <Link className="text-2xl font-bold tracking-tight" to={"/menu"}>
        Menu
      </Link>
      <Link className="text-2xl font-bold tracking-tight" to={"/about"}>
        About
      </Link>
      <Link className="text-2xl font-bold tracking-tight" to={"/contact"}>
        Contact
      </Link>
      {user ? (
        <UserMenu />
      ) : (
        <Button
          className="text-2xl font-bold tracking-tight"
          onClick={async () => await loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default MainNav;
