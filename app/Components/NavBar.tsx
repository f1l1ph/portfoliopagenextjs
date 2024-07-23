"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex rounded items-center justify-center pt-5">
      <div className="bg-base-300 rounded-xl outline outline-primary  hover:outline-secondary">
        <Link href="/">
          <button className="btn btn-ghost text-xl">Home</button>
        </Link>
        <Link href="/projects">
          <button className="btn btn-ghost text-xl">Projects</button>
        </Link>
        <Link href="/about">
          <button className="btn btn-ghost text-xl"> About me</button>
        </Link>
      </div>
      <ThemeToggle></ThemeToggle>
    </div>
  );
};

export default NavBar;
