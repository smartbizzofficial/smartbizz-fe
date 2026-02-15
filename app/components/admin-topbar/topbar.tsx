"use client";

import { MENU_BAR_LIST } from "@/app/constants/routePath";
import { usePathname } from "next/navigation";

type Props = {};

export default function Topbar({}: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 w-full pl-[270px] h-16 bg-white shadow-md flex items-center">
      <div className="w-full p-4 flex items-center justify-between">
        <div />
        {/* <div className="cursor-pointer ml-2">
          <div className="w-6.25 h-0.75 bg-gray-600 my-1 rounded-sm" />
          <div className="w-6.25 h-0.75 bg-gray-600 my-1 rounded-sm" />
          <div className="w-6.25 h-0.75 bg-gray-600 my-1 rounded-sm" />
        </div> */}
        {/* <div className="font-bold text-xl">{topbarText ? topbarText : ""}</div> */}
        <div className="flex flex-col items-end select-none font-semibold">
          <span>Supakorn Songhong</span>
          <span className="text-xs">(Sale)</span>
        </div>
      </div>
    </div>
  );
}
