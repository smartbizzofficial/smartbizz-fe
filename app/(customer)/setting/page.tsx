import React from "react";

type Props = {};

export default function SettingPage({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border p-4 rounded border-gray-300">
        <span className="font-bold text-xl">ตั้งค่าข้อมูลส่วนตัว</span>
      </div>
    </div>
  );
}
