import { GiftIcon, SearchIcon, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

const NavBar = () => (
  <nav className="flex justify-between gap-2">
    <Link href="/" className="flex gap-4 items-center ">
      <div className="rounded-full p-1 bg-white">
        <GiftIcon className="text-black" />
      </div>
      <div className="tracking-widest">gifted</div>
    </Link>
    <div className="flex gap-6">
      <SearchIcon className="h-5 w-5 shrink-0" />
      <ShoppingCart className="h-5 w-5 shrink-0" />
      <UserRound className="h-5 w-5 shrink-0" />
    </div>
  </nav>
);

export default NavBar;
