import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/utils/api-response";
import { type Post, posts } from "../route";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

// Helper to find post by ID or Slug
function findPost(idOrSlug: string): Post | undefined {
  return posts.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

// Helper to update post
function updatePostInStore(updatedPost: Post) {
  const index = posts.findIndex((p) => p.id === updatedPost.id);
  if (index !== -1) {
    posts[index] = updatedPost;
  }
}

// Helper to delete post
function deletePostFromStore(id: string) {
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    return true;
  }
  return false;
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const post = findPost(id);

    if (!post) {
      return errorResponse("Post not found", null, 404);
    }

    return successResponse(post, "Post retrieved successfully");
  } catch (error) {
    return errorResponse("Failed to retrieve post", error);
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();
    const post = findPost(id);

    if (!post) {
      return errorResponse("Post not found", null, 404);
    }

    const updatedPost: Post = {
      ...post,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    // If title changed and slug wasn't provided, should we update slug?
    // Usually standard CMSs update slug if title changes only if config says so,
    // but here let's keep it simple: only update slug if explicitly provided.
    // However, user asked to "add slug too if required".
    // Let's ensure ID cannot be changed via body.
    if (body.id && body.id !== post.id) {
      return errorResponse("Cannot update Post ID", null, 400);
    }

    updatePostInStore(updatedPost);

    return successResponse(updatedPost, "Post updated successfully");
  } catch (error) {
    return errorResponse("Failed to update post", error);
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  // PUT usually replaces the entire resource.
  // For simplicity, we'll treat it similar to PATCH but expect full payload or just merge.
  // In many simple APIs, PUT and PATCH are similar, but PUT implies full replacement.
  // We will re-use the PATCH logic for now as it's safer for partial updates,
  // unless strict PUT semantics are required (requiring all fields).
  // Let's do a merge for now to be friendly.
  return PATCH(req, {
    params,
  });
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const post = findPost(id);

    if (!post) {
      return errorResponse("Post not found", null, 404);
    }

    // We must use the specific ID to delete, even if found by slug, to be safe.
    // Or just use the found post.id
    deletePostFromStore(post.id);

    return successResponse(null, "Post deleted successfully");
  } catch (error) {
    return errorResponse("Failed to delete post", error);
  }
}
