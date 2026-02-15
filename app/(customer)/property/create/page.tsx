type Props = {};

export default function CreatePropertyPage({}: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">สร้างบ้านพูลวิลล่า</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold">รายละเอียดบ้าน</span>
        <div className="flex flex-col gap-2 border border-gray-300 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-2 gap-y-4">
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">ชื่อบ้าน : </span>
              <input placeholder="กรุณากรอกชื่อบ้าน" />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                หมายเลขอ้างอิง :
              </span>
              <input placeholder="กรุณากรอกรหัสอ้างอิงบ้าน" />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                ห้องนอน (ห้อง) :
              </span>
              <input
                className="w-full"
                placeholder="กรุณากรอกห้องนอน"
                type="number"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                ห้องน้ำ (ห้อง) :
              </span>
              <input
                className="w-full"
                placeholder="กรุณากรอกห้องน้ำ"
                type="number"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                ที่จอดรถ (คัน) :
              </span>
              <input
                className="w-full"
                placeholder="กรุณากรอกห้องน้ำ"
                type="number"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                หมายเหตุสำหรับที่จอดรถ
              </span>
              <textarea className="w-full" placeholder="กรุณากรอกหมายเหตุ" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="text-sm font-semibold ml-0.5">
              ลิงค์สำหรับลูกค้า :
            </span>
            <input
              className="w-full"
              placeholder="กรุณากรอกห้องน้ำ"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold">รายละเอียดการขาย</span>
        <div className="flex flex-col gap-2 border border-gray-300 rounded-2xl p-4">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-col gap-1">
              <span className="text-sm font-semibold ml-0.5">
                ลิงค์สำหรับเช็คตาราง :
              </span>
              <input
                className="w-full"
                placeholder="กรุณากรอกห้องน้ำ"
                type="number"
              />
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันอาทิตย์ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันจันทร์ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันอังคาร :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันพุธ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5  w-25">
                วันพฤหัสบดี :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันศุกร์ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm font-semibold ml-0.5 w-25">
                วันเสาร์ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
            <div className="flex gap-3 items-center py-3">
              <span className="text-sm font-semibold ml-0.5 w-max">
                วันหยุดพิเศษ/วันหยุดนักขัตฤกษ์ :
              </span>
              <span>คืนละ </span>
              <input type="number" placeholder="กรุณากรอกราคาต่อคืน" />
              <span>บาท</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 self-end">
        <button className="px-5 py-1 bg-gray-400 transition duration-150 hover:bg-gray-500 hover:border-gray-600 border border-gray-400 text-white">
          ย้อนกลับ
        </button>
        <button className="px-5 py-1 bg-blue-700 transition duration-150 hover:bg-blue-900 hover:border-blue-900 border border-blue-700 text-white">
          สร้าง
        </button>
      </div>
    </div>
  );
}
