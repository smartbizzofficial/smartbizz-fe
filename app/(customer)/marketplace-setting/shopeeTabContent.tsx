import Image from "next/image";
import ShopeeLogo from "../../assets/images/shopee.png";

type Props = {};

export default function ShopeeTabContent({}: Props) {
  return (
    <div className="bg-gray-100 w-full rounded-md p-4 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Image src={ShopeeLogo} width={45} height={45} alt="Tiktok Shop Logo" />
        <div className="flex flex-col text-xs">
          <span className="text-xl font-semibold  select-none">
            เชื่อมต่อ Shopee เพื่อรับออร์เดอร์
          </span>
          <span className="select-none text-gray-700">
            เชื่อมต่ออย่างปลอดภัยผ่านระบบ Shopee API
            ระบบจะเข้าถึงเฉพาะข้อมูลที่จำเป็นสำหรับจัดการออเดอร์ของคุณเท่านั้น
          </span>
        </div>
      </div>
      <button className="ml-1  text-center cursor-pointer flex-1 py-2 w-max p-4 text-sm font-medium rounded-md transition-all bg-[#EE4D2D] text-white">
        Connect Shopee Seller Account
      </button>
    </div>
  );
}
