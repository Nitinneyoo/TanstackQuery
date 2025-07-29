import { useQuery, useMutation } from "@tanstack/react-query";
import PostsQueryOptions from "../QueryOption/PostsQueryOptions";
import createPostMutationOptions from "../QueryOption/createPostMutationOptions";
import { Button } from "../components/ui/button";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { queryClient } from "../lib/queryClient";

export function PostsList() {
  const { data: posts, isLoading } = useQuery(PostsQueryOptions());
  const { mutate: createPost, isPending: isCreating } = useMutation(createPostMutationOptions());
  const { mutate: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: async (postId: number) => {
      await axios.delete(`http://localhost:4001/posts/${postId}`);
      return postId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center overflow-y-auto sticky top-0 bg-background p-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <Button
          onClick={() => createPost()}
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Random Post"}
        </Button>
      </div>

      <div className="grid gap-4">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.content}</p>
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-700 hover:bg-red-100"
                onClick={() => deletePost(post.id)}
                disabled={isDeleting}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete post</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
