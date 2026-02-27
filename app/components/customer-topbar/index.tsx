import { CUSTOMER_ROUTE_PATH, ROUTE_PATH } from "@/app/constants/routePath";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CustomerTopbar({}: Props) {
  return (
    <div
      style={{ boxShadow: "0 1px 9px 0 rgba(0, 0, 0, 0.3)" }}
      className={`h-20 bg-primary w-full fixed top-0 left-0 z-50 px-5 bg-white`}
    >
      <div className="flex items-center h-full w-full gap-5">
        <Link href={"/"}>
          <span className="cursor-pointer">Chill & Own Pool Villa</span>
        </Link>
        <Link href={CUSTOMER_ROUTE_PATH.HOMELIST}>
          <span className="cursor-pointer">พูลวิลล่าทั้งหมด</span>
        </Link>

        <>
          <Link href={CUSTOMER_ROUTE_PATH.LOGIN}>
            <button className="px-5 bg-blue-700 transition duration-150 hover:bg-blue-900 hover:border-blue-900 border border-blue-700 text-white">
              Console
            </button>
          </Link>
        </>
      </div>
    </div>
  );
}
