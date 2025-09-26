import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ui/mode-toggle";
import { MobileSearch } from "./MobileSearch";
import { SearchSection } from "./SearchSection";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full flex justify-between items-center p-5  mx-20 max-sm:mx-5">
        <Link href={"/"}>
          <img
            src="/images/moviez.png"
            alt="logo"
            className="w-23 h-5 cursor-pointer "
          />
        </Link>
        <div className="flex gap-2 ">
          <GenreDropDown></GenreDropDown>
          <div className="max-sm:hidden">
            {/* <SearchInput></SearchInput> */}
            <SearchSection />
          </div>
        </div>

        <MobileSearch />

        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Header;
