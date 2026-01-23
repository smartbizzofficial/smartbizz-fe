import Link from "next/link";
import { ROUTE_PATH } from "./constants/routePath";

export default function Home() {
  return (
    <>
      <Link href={ROUTE_PATH.DASHBOARD}>
        <button className="px-5 bg-blue-700 transition duration-150 hover:bg-blue-900 hover:border-blue-900 border border-blue-700 text-white">
          Console
        </button>
      </Link>
    </>
  );
}
