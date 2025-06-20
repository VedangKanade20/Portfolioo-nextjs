
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  // 📩 You can connect to email or store here
  console.log("Message received:", { name, email, message });

  return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 });
}
