"use clinet";

import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="position text-yellow-500 font-got absolute z-[999] w-full top-0 left-0 flex justify-between p-4">
      <ul className="flex gap-3 text-2xl ">
        <li className="">
          <Link href="/workshops" className="">
            Workshop
          </Link>
        </li>
        <li className="">
          <Link href="/workshops" className="">
            Competitions
          </Link>
        </li>
        <li className="">
          <Link href="/workshops" className="">
            Events
          </Link>
        </li>
      </ul>
      <div className="logo">
        <Link href="/">
          <img src="/logo" alt="Ethereon Logo" />
        </Link>
      </div>
      <ul className="flex gap-3 text-2xl">
        <li className="">
          <Link href="/workshops" className="">
            Accommodation
          </Link>
        </li>
        <li className="">
          <Link href="/workshops" className="">
            Store
          </Link>
        </li>
        <li className="">
          <Link
            href="/workshops"
            className="bg-yellow-500 text-slate-200 py-2 px-4 font-bold rounded-tl-xl  rounded-br-xl"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
