import { ROUTE_PATH } from "@/app/constants/routePath";
import Link from "next/link";

type Props = {};

export default function CustomerPage({}: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">รายการบ้านพูลวิลล่า</span>
        <Link href={ROUTE_PATH.PROPERTY_CREATE}>
          <button className="px-5 py-1 bg-blue-700 transition duration-150 hover:bg-blue-900 hover:border-blue-900 border border-blue-700 text-white">
            + สร้างใหม่
          </button>
        </Link>
      </div>
      {/* <SearchJobForm /> */}
      <div className="flex flex-col gap-3">
        <div className="overflow-x-auto">
          <table className="text-sm text-gray-500 dark:text-gray-400 w-full min-w-[1500px]">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 select-none">
              <tr>
                <th className="py-3 text-center">No.</th>
                <th className="py-3 text-center">Quotation ID</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-left">ร้านผู้แทนจำหน่าย</th>
                <th className="py-3 text-center">วันที่เสนอราคา</th>
                <th className="py-3 text-center">ยืนราคาถึงวันที่</th>
                <th className="py-3 text-right">Cost</th>
                <th className="py-3 text-right">Dealer Discount (%)</th>
                <th className="py-3 text-right">Other Discount (%)</th>
                <th className="py-3 text-right">Price</th>
                <th className="py-3 text-right">Net Margin(%)</th>
                <th className="py-3 text-center">Created</th>
                <th className="py-3 text-center">Updated</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              ].map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 hover:text-black"
                  >
                    <td className="w-max min-w-[60px] py-1.5 text-center font-medium">
                      {index + 1}
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 flex justify-center cursor-pointer hover:underline hover:text-blue-700">
                      RFQ20251105-ABCDEF-2025001
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-center">
                      รออนุมัติ
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-left">
                      สหสินไทย จำกัด
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-center">
                      05/11/25
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-center">
                      05/12/25
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-right">
                      10,000
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-right">
                      3%
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-right">
                      4%
                    </td>
                    <td className="w-max min-w-[100px] py-1.5 text-right">
                      14,250
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-right">
                      27.25%
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-center">
                      05/11/25 14:10
                    </td>
                    <td className="w-max min-w-[150px] py-1.5 text-center">
                      05/11/25 14:10
                    </td>
                    <td className="w-max min-w-[180px] flex justify-evenly gap-2">
                      <span className="text-white rounded-md px-2 py-[0.5px] bg-yellow-500 font-medium cursor-pointer hover:underline">
                        PDF
                      </span>
                      <span className="text-blue-600 cursor-pointer hover:underline font-medium">
                        Detail
                      </span>
                      <span className="text-red-500 font-medium cursor-pointer hover:underline">
                        Inactive
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
