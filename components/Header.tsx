import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 p-3 md:py-3">
      <div className="container mx-auto flex items-center gap-5">
       <Link href={'/'}>
        <Image
        src="/images/logo.png" // Path to the image
        alt="Sample Image"
        width={100} // The desired width of the image
        height={50}
       // The desired height of the image
      />
        </Link>


       <div className="flex-1">
       <Input className="text-slate-50" placeholder="Search Products..." />
       </div>

       <Button variant={'destructive'}>LOGIN</Button>










      </div>
    </header>
  );
};

export default Header;
