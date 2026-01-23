import React, { ReactNode } from "react";
import Sidebar from "../components/side-bar/sidebar";
import Topbar from "../components/top-bar/topbar";

type Props = {
  children: ReactNode;
};

export default function ContentLayout({ children }: Props) {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="flex flex-col gap-2 min-h-[calc(100vh-64px)] mt-16 p-4 ml-[270px] max-w-[calc(100vw-270px)]">
        {children}
      </div>
    </div>
  );
}
