import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";

const MobileNav = () => {
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
              <Link className="font-bold tracking-tight" to={"/login"}>
                Login
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
