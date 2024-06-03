import { Link, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import UserMenu from "../UserMenu";
import SearchBar, { SearchForm } from "../SearchBar";
import path from "path";

const MainNav = () => {
  const { loginWithRedirect, user } = useAuth0();

  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className=" lg:flex gap-20  items-center hidden">
      <SearchBar
        placeholder="Search By Location"
        onSubmit={handleSearchSubmit}
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
