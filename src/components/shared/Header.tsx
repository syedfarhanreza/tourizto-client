"use client";

import { useAppSelector } from "@/redux/hook";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountPanel } from "../client/AccountPanel";
import { LeftSidebar } from "../client/LeftSidebar";
import FilterPremiumContent from "../feed/FilterPremiumContent";

const Header = () => {
  const location = usePathname();

  const { user, isLoading, token } = useAppSelector((state) => state.auth);

  return (
    <header className="px-10 py-5 lg:py-7 border-b sticky top-0 z-50 bg-black">
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
        <nav className="hidden lg:flex pl-20 mx-auto gap-16 items-center">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`text-orange-600 text-lg hover:text-orange-400 ${
                location === nav.path && "font-extrabold text-green-600"
              }`}
            >
              {nav.route}
            </Link>
          ))}
        </nav>


        <div className="flex gap-3 items-center justify-start ">
        <FilterPremiumContent />
          {user ? (
            <AccountPanel />
          ) : (
            <Link href="/login" className="text-orange-600 text-lg hover:text-orange-400 btn border-2 border-orange-600 px-4 py-1 rounded-xl">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
