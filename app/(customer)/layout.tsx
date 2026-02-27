import { ReactNode } from "react";
import Sidebar from "../components/admin-sidebar/sidebar";
import Topbar from "../components/admin-topbar/topbar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="flex flex-col gap-2 min-h-[calc(100vh-64px)] mt-16 p-4 ml-[270px] max-w-[calc(100vw-270px)]">
        {children}
      </div>
    </>
  );
}
