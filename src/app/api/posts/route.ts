import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/utils/api-response";

export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// In-memory store
export const posts: Post[] = [
  {
    id: "1",
    slug: "hello-world",
    title: "Hello World",
    content: "This is the first post.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    return successResponse(posts, "Posts retrieved successfully");
  } catch (error) {
    return errorResponse("Failed to retrieve posts", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.content) {
      return errorResponse("Title and content are required", null, 400);
    }

    // Generate slug from title
    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const newPost: Post = {
      id: Math.random().toString(36).substring(7),
      slug,
      title: body.title,
      content: body.content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    posts.push(newPost);

    return successResponse(newPost, "Post created successfully", 201);
  } catch (error) {
    return errorResponse("Failed to create post", error);
  }
}
