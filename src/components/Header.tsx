import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] flex justify-between items-center p-5  ">
        <Link href={"/"}>
          <img
            src="/images/moviez.png"
            alt="logo"
            className="w-23 h-5 cursor-pointer ml-20"
          />
        </Link>
        <div className="flex gap-2">
          {" "}
          <GenreDropDown></GenreDropDown>
          <SearchInput></SearchInput>
        </div>
        <div className="mr-20">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Header;
