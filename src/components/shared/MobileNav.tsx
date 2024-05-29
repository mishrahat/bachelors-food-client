import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "../UserMenu";
import { Button } from "../ui/button";

const MobileNav = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-red-950" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <div className="flex flex-col gap-10">
              <Link className=" font-bold tracking-tight" to={"/"}>
                Home
              </Link>
              <Link className=" font-bold tracking-tight" to={"/menu"}>
                Menu
              </Link>
              <Link className=" font-bold tracking-tight" to={"/about"}>
                About Us
              </Link>
              <Link className=" font-bold tracking-tight" to={"/contact"}>
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
