import TiktokShopLogo from "../../assets/images/tiktokshop.png";
import Image from "next/image"; // เพิ่มบรรทัดนี้ครับ

type Props = {};

export default function TiktokTabContent({}: Props) {
  function getTikTokAuthUrl() {
    const rootUrl = "https://auth.tiktok-shops.com/oauth/authorize";
    const options = {
      app_key: process.env.NEXT_PUBLIC_TIKTOK_APP_KEY!, // App Key จาก TikTok Partner Platform
      state: "random_secure_string", // สตริงสุ่มเพื่อความปลอดภัย (CSRF Protection)
      // Redirect URI ต้องตรงกับที่ลงทะเบียนไว้ใน TikTok Console เป๊ะๆ
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/tiktok/callback`,
    };

    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
  }
  const authUrl = getTikTokAuthUrl();

  return (
    <div className="bg-gray-100 w-full rounded-md p-4 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={TiktokShopLogo}
          width={50}
          height={50}
          alt="Tiktok Shop Logo"
        />
        <div className="flex flex-col text-xs">
          <span className="text-xl font-semibold  select-none">
            เชื่อมต่อ Tiktok Shop เพื่อรับออร์เดอร์
          </span>
          <span className="select-none text-gray-700">
            เชื่อมต่ออย่างปลอดภัยผ่านระบบ TikTok Official API
            ระบบจะเข้าถึงเฉพาะข้อมูลที่จำเป็นสำหรับจัดการออเดอร์ของคุณเท่านั้น
          </span>
        </div>
      </div>
      <a
        href={authUrl}
        target="_blank"
        className="ml-1 w-max text-center cursor-pointer flex-1 py-2 w-max p-4 text-sm font-medium rounded-md transition-all bg-black text-white"
      >
        Connect Tiktok Shop
      </a>
    </div>
  );
}
