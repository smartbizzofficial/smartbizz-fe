import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ใช้ Service Role Key เพื่อให้ Webhook สามารถ Insert ข้อมูลลงตารางที่ติด RLS ได้
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: Request) {
  try {
    // 1. รับข้อมูลจาก TikTok
    const body = await request.json();
    const { shop_id, type, data } = body;

    console.log(`[Webhook] Received ${type} from Shop: ${shop_id}`);

    // 2. ตรวจสอบประเภท Event (ในที่นี้เราเน้นเรื่อง Order)
    if (type === "ORDER_STATUS_CHANGE") {
      // 3. หาข้อมูล Connection เพื่อดึง store_id และ connection_id
      const { data: connection, error: connError } = await supabaseAdmin
        .from("shop_connections")
        .select("id, store_id")
        .eq("external_shop_id", shop_id)
        .eq("channel_id", "tiktok")
        .single();

      if (connError || !connection) {
        console.error(`[Error] Connection not found for shop: ${shop_id}`);
        return NextResponse.json(
          { message: "Connection not found" },
          { status: 404 },
        );
      }

      // 4. บันทึกข้อมูลลงตาราง orders
      const { error: insertError } = await supabaseAdmin.from("orders").insert({
        store_id: connection.store_id,
        connection_id: connection.id,
        order_sn: data.order_id,
        customer_name: data.buyer_user_id || "Unknown",
        total_amount: data.total_amount || 0,
        status: data.order_status,
        raw_json: body, // เก็บข้อมูลดิบไว้เพื่อใช้ตรวจสอบ (Audit Log)
      });

      if (insertError) {
        console.error("[Error] Failed to insert order:", insertError.message);
        throw insertError;
      }

      console.log(
        `[Success] Order ${data.order_id} recorded for Store: ${connection.store_id}`,
      );
    }

    // 5. ตอบกลับ TikTok ด้วย 200 OK (TikTok กำหนดว่าต้องตอบกลับภายในเวลาที่จำกัด)
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err: any) {
    console.error("[Webhook Exception]:", err.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
