"use client";

import { useState } from "react";

type Props = {};

type SearchForm = {
  jobId: string;
  customerName: string;
  phoneNumber: string;
};

export default function SearchJobForm({}: Props) {
  const [form, setForm] = useState<SearchForm>({
    jobId: "",
    customerName: "",
    phoneNumber: "",
  });

  return (
    // <div className="border p-4 rounded-sm border-gray-300 flex flex-col gap-1">
    <div className="flex flex-col gap-1 mt-5">
      <span className="font-semibold">ค้นหางาน</span>
      <form
        className="w-full flex gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.jobId && !form.customerName && !form.phoneNumber) {
            return;
          }
        }}
      >
        <input
          className="w-full"
          placeholder="ค้นหาด้วยหมายเลขงาน"
          value={form.jobId}
          onChange={(e) => setForm({ ...form, jobId: e.target.value })}
        />
        <input
          className="w-full"
          placeholder="ค้นหาด้วยชื่อ"
          value={form.customerName}
          onChange={(e) => setForm({ ...form, customerName: e.target.value })}
        />
        <input
          className="w-full"
          placeholder="ค้นหาด้วยเบอร์โทรศัพท์"
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
        />
        <button
          type="submit"
          className="px-5 bg-green-500 transition duration-150 hover:bg-green-600 hover:border-green-600 border border-green-500 text-white"
        >
          ค้นหา
        </button>
        <button
          type="button"
          className="px-5 bg-gray-400 transition duration-150 hover:bg-gray-500 hover:border-gray-500 border border-gray-400 text-white"
          onClick={() =>
            setForm({ jobId: "", customerName: "", phoneNumber: "" })
          }
        >
          ล้างตัวกรอง
        </button>
      </form>
    </div>
  );
}
