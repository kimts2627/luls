import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="h-full flex-1">
      <section className="w-full h-full flex justify-evenly items-center">
        <Link href="/">
          <p className="cursor-pointer Lato-bold">AboutUS</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer Lato-bold">Membership</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer Lato-bold">Lead</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer Lato-bold">Event</p>
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
