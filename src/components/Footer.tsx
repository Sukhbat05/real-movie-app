import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#4338CA]  px-10 py-20  gap-10 flex  w-full m-auto justify-between text-foreground max-sm:flex-col max-sm:mx">
      <div>
        <Link href={"/"}>
          <Image
            src="/images/logom.png"
            alt="Logo"
            width={80}
            height={60}
            priority={true}
            className="cursor-pointer w-[92px] h-auto "
          />
        </Link>
        <p className=" text-sm leading-6 tracking-wide mt-5 max-w-72">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-10 ">
        <div>
          <h2 className="text-base uppercase font-bold  tracking-wide  py-2 mb-5 relative">
            Contuct information
          </h2>
          <div className=" text-sm flex flex-col gap-2">
            <div>
              <p>Email:</p>
              <p className="font-medium">support@movieZ.com</p>
            </div>
            <div>
              <p>Phone:</p>
              <p className="font-medium">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-foreground">
          <div>Follow Us</div>
          <div className="flex gap-2 mt-4 max-sm:flex-col">
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
