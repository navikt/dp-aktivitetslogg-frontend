import { NextResponse } from "next/server";
import { authorizeUser } from "@/app/api/me/authorizedUser";

export async function GET(request: Request) {
  const user = authorizeUser(request);

  return NextResponse.json(await user);
}
