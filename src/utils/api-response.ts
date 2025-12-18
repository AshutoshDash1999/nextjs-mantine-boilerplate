import { NextResponse } from "next/server";

export type ApiResponse<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: unknown;
};

export function successResponse<T>(data: T, message?: string, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    },
    {
      status,
    }
  );
}

export function errorResponse(message: string, error?: unknown, status = 500) {
  return NextResponse.json(
    {
      success: false,
      message,
      error,
    },
    {
      status,
    }
  );
}
