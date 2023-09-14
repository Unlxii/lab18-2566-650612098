import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Ronnachai Sitthichoksathit",
    studentId: "650612098",
  });
};
