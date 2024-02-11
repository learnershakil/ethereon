"use clinet";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="absolute z-40 w-full top-0 left-0 flex">
      <div className="text-white gap-7 font-got absolute z-40 w-full top-0 left-0 flex items-center justify-between p-4">
        <ul className="flex gap-10 w-full text-2xl border-yellow-400  px-10 border-r-2 border-b-2 rounded-br-full ">
          <li className="">
            <Link href="/workshops" className="">
              Workshop
            </Link>
          </li>
          <li className="">
            <Link href="/competitions" className="">
              Competitions
            </Link>
          </li>
          <li className="">
            <Link href="/events" className="">
              Events
            </Link>
          </li>
        </ul>
        <div className="logo">
          <Link href="/" className="text-4xl">
            <img src="/logo" alt="Ethereon Logo" />
          </Link>
        </div>
        <ul className="flex flex-row-reverse items-center gap-10 w-full text-2xl  border-yellow-400 border-l-2 border-b-2 px-10 rounded-bl-full">
          <li className="mb-2">
            <Link
              href="/workshops"
              className="bg-yellow-500 text-slate-300 py-2 px-4  font-bold rounded-tl-xl  rounded-br-xl"
            >
              Register
            </Link>
          </li>
          <li className="">
            <Link href="/workshops" className="">
              Store
            </Link>
          </li>
          <li className="">
            <Link href="/workshops" className="">
              Accommodation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
