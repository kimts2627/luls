import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="h-full flex-1">
      <section className="w-full h-full DMSans-bd flex justify-evenly items-center">
        <Link href="/">
          <p className="cursor-pointer">AboutUS</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer">Membership</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer">Lead</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer">Event</p>
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
