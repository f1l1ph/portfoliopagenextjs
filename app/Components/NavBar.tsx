"use client";

import { FaHome } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <>
      <div className="flex rounded items-cener justify-center pt-5">
        <div className="bg-base-300 rounded-xl outline outline-primary flex items-center justify-center hover:outline-secondary">
          <Link href="/">
            <button className="btn btn-ghost text-xl">
              Home <FaHome />
            </button>
          </Link>
          <Link href="/projects">
            <button className="btn btn-ghost text-xl">Projects</button>
          </Link>
          <Link href="/about">
            <button className="btn btn-ghost text-xl"> About me</button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default NavBar;
