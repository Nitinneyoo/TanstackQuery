import { mutationOptions } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../lib/queryClient";
import { generateRandomPost } from "../utils/randomPostGenerator";

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
