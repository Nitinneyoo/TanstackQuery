import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { queryClient } from "../lib/queryClient";
import createPostMutationOptions from "../QueryOption/createPostMutationOptions";
import PostsQueryOptions from "../QueryOption/PostsQueryOptions";

export function PostsList() {
  const { data: posts, isLoading } = useQuery(PostsQueryOptions());
  const { mutate: createPost, isPending: isCreating } = useMutation(
    createPostMutationOptions(),
  );
  const { mutate: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: async (postId: number) => {
      await axios.delete(`http://localhost:4001/posts/${postId}`);
      return postId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-muted-foreground">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <Button
          onClick={() => createPost()}
          disabled={isCreating}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          <span>{isCreating ? "Creating..." : "Create Post"}</span>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-card text-card-foreground rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow space-y-4">
                <h3 className="text-xl font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">{post.content}</p>
                <p className="text-xs text-muted-foreground pt-2">
                  By {post.author}
                </p>
              </div>
              <div className="p-4 border-t flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full h-8 w-8"
                  onClick={() => deletePost(Number(post.id))}
                  disabled={isDeleting}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete post</span>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
