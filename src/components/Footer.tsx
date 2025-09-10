import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#4338CA] px-10 py-20  gap-10 flex  w-[1440px] m-auto justify-between">
      <div>
        <Link href={"/"}>
          <Image
            src="/images/moviez.png"
            alt="Logo"
            width={120}
            height={100}
            priority={true}
            className="cursor-pointer w-40 h-auto"
          />
        </Link>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-10 ">
        <div>
          <h2 className="text-base uppercase font-bold text-white tracking-wide  py-2 mb-5 relative">
            Contuct information
          </h2>
          <div className="text-gray-300 text-sm flex flex-col gap-2">
            <div>
              <p>Email:</p>
              <p className="text-white font-medium">support@movieZ.com</p>
            </div>
            <div>
              <p>Phone:</p>
              <p className="text-white font-medium">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div>Follow Us</div>
          <div className="flex gap-2 mt-4">
            <p>Facebook</p>
            <p>Intagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
