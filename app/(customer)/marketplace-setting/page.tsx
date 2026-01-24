"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ShopeeTabContent from "./shopeeTabContent";
import LazadaTabContent from "./lazadaTabContent";
import TiktokTabContent from "./tiktokTabContent";
import FacebookTabContent from "./facebookContent";

type Props = {};

const tabs = [
  {
    id: "tiktok",
    label: "Tiktok Shop",
  },
  {
    id: "shopee",
    label: "Shopee",
  },
  {
    id: "lazada",
    label: "Lazada",
  },
  {
    id: "facebook",
    label: "Facebook",
  },
];

export default function MarketPlaceSettingPage({}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "tiktok";

  return (
    <div className="p-4">
      <div className="w-full">
        <div className="flex bg-gray-100 p-1 rounded-lg w-max">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => router.push(`?tab=${tab.id}`, { scroll: false })}
              className={`w-50 text-center cursor-pointer flex-1 py-2 text-sm font-medium rounded-md transition-all
              ${activeTab === tab.id ? "bg-white shadow" : "text-gray-500"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === "shopee" && <ShopeeTabContent />}
          {activeTab === "lazada" && <LazadaTabContent />}
          {activeTab === "tiktok" && <TiktokTabContent />}
          {activeTab === "facebook" && <FacebookTabContent />}
        </div>
      </div>
    </div>
  );
}
