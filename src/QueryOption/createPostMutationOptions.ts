import { mutationOptions } from "@tanstack/react-query";
import axios from "axios";
import { generateRandomPost } from "../utils/randomPostGenerator";
import { queryClient } from "../lib/queryClient";

const createPostMutationOptions = () => {
  return mutationOptions({
    mutationKey: ["createPost"],
    mutationFn: async () => {
      const newPost = generateRandomPost();
      const response = await axios.post("http://localhost:4001/posts", newPost);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate the posts query to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export default createPostMutationOptions;
