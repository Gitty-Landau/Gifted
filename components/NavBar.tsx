import { GiftIcon, SearchIcon, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getUser } from "@/lib/services/auth";

const NavBar = async () => {
  const { user } = (await getUser()).data;

  return (
    <nav className="flex justify-between gap-2">
      <Link href="/" className="flex gap-4 items-center ">
        <div className="rounded-full p-1 bg-white">
          <GiftIcon className="text-black" />
        </div>
        <div className="tracking-widest">gifted</div>
      </Link>
      <div className="flex gap-2">
        <Button size="icon" variant="ghost" className="rounded-full" disabled>
          <SearchIcon className="h-5 w-5 shrink-0" />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full" disabled>
          <ShoppingCart className="h-5 w-5 shrink-0" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
              <UserRound className="h-5 w-5 shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {user?.id ? (
              <DropdownMenuItem></DropdownMenuItem>
            ) : (
              <Link href="/login">
                <DropdownMenuItem className="flex justify-center">
                  Login
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
