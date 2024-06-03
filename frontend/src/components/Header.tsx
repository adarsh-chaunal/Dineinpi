import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav"
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-lime-500 py-6">
      <div className="container mx-auto flex justify-between item-center">
        <Link
          className="text-3xl font-bold tracking-tight text-lime-500"
          to="/"
        >
          dineinpi.com
        </Link>
        <div className="self-end md:hidden">
            <MobileNav />
        </div>
        <div className="hidden md:block">
            <MainNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
