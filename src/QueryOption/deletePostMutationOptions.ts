import { mutationOptions } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../lib/queryClient";

const deletePostMutationOptions = (postId: number) => {
  return mutationOptions({
    mutationKey: ["deletePost", postId],
    mutationFn: async () => {
      await axios.delete(`http://localhost:4001/posts/${postId}`);
      return postId;
    },
    onSuccess: () => {
      // Invalidate the posts query to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export default deletePostMutationOptions;
