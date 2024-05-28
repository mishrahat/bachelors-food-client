import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { AvatarIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-dropdown-menu";

const UserMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <h4 className="text-xl font-bold text-red-950">
          Hey, {user?.given_name}
        </h4>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="flex gap-2">
          <Link className="font-bold" to="/manage-restaurant">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2">
          <AvatarIcon />
          <Link className="font-bold" to="/user-profile">
            Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button onClick={() => logout()} className=" bg-red-950 w-full">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
