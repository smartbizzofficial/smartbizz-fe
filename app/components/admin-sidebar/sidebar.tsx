"use client";
import { MENU_BAR_LIST } from "@/app/constants/routePath";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function Sidebar({}: Props) {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-[270px] min-h-full bg-white border border-t-0 border-r border-r-[#d8d8d8] z-99">
      <div className="relative">
        <div className="select-none bg-white h-16 flex items-center justify-center font-bold fixed top-0 left-0 w-[270px] shadow-md text-2xl">
          SmartBizz
        </div>
        <div className="h-screen mt-[64px] overflow-auto bg-gray-200">
          <div className="flex flex-col items-center w-full h-[100vh-64px]">
            {MENU_BAR_LIST.map((item, i) => {
              return (
                <Link key={i} className="w-full" href={item.path}>
                  <div
                    className={`select-none flex items-center w-full h-[50px] border-b border-b-[#d8d8d8] ${pathname === item.path ? null : "hover:bg-gray-300"} transition-colors duration-200 cursor-pointer ${pathname === item.path ? "bg-gray-400 text-white font-semibold" : null}`}
                  >
                    <span className="ml-6">{item.sidebarTitle}</span>
                  </div>
                </Link>
              );
            })}
            <div className="select-none flex items-center w-full h-[50px] border-b border-b-[#d8d8d8] hover:bg-red-100 transition-colors duration-200 cursor-pointer">
              <span className="ml-6 text-red-500">ออกจากระบบ</span>
            </div>
          </div>
          <div className="h-50 flex justify-center">
            <span className="mt-[30px] opacity-20 select-none">
              DEV-VERSION-0.0.1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
