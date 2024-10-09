"use client";

import { useAppSelector } from "@/redux/hook";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountPanel } from "../client/AccountPanel";
import { LeftSidebar } from "../client/LeftSidebar";

const Header = () => {
  const location = usePathname();

  const { user, isLoading, token } = useAppSelector((state) => state.auth);

  return (
    <header className="py-5 lg:py-7 border-b-2 border-orange-400 sticky top-0 z-50 bg-gray-800 mb-4">
      <div className="layout_container flex justify-between gap-4 items-center">
        <div className="flex items-center gap-2">
          <LeftSidebar />
          <Link href={"/"} className="text-lg font-bold">
            <Image
              width={100}
              height={100}
              src="/images/logo.png"
              alt="logo"
              className="w-[80px] md:flex hidden"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex gap-16 items-center">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`text-orange-600 hover:text-amber-200 ${
                location === nav.path && "font-extrabold text-amber-300"
              }`}
            >
              {nav.route}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3 items-center justify-start ">
          {user ? (
            <AccountPanel />
          ) : (
            <Link href="/login" className="btn px-4 py-2 rounded-xl bg-amber-200 text-orange-700 font-bold hover:bg-orange-600 hover:text-amber-200">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;