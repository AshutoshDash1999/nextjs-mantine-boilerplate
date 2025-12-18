import { successResponse } from "@/utils/api-response";

export async function GET() {
  return successResponse(
    {
      status: "online",
      timestamp: new Date().toISOString(),
    },
    "API is running"
  );
}
