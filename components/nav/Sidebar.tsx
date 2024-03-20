import React from "react";
import Link from "next/link";
import LogInButton from "../LogInButton";

const Links = [
  { label: "Accueil", path: "/" },
  { label: "Articles", path: "/articles" },
  { label: "Editeur", path: "/editor" },
];

function Sidebar() {
  return (
    <nav
      className="text-center align-middle flex flex-col mx-2  p-2 sticky  left-0 top-0 h-screen
      w-fit
     backdrop-blur-[1px]  border-r-[1px]  border-red-700  transition-all ease-in-out duration-300"
    >
      {" "}
      Series of link
      {Links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className="my-4 py-4 hover:bg-slate-500/30 text-center rounded-sm drop-shadow-2xl transition-all ease-in-out duration-300 border-[1px]  hover:border-slate-500"
        >
          {link.label}
        </Link>
      ))}
      <button> toggle dark mode</button>
      <LogInButton />
    </nav>
  );
}

export default Sidebar;
