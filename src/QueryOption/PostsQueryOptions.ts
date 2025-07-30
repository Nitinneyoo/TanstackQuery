import { queryOptions } from "@tanstack/react-query"
import axios from "axios"

type Posts = {
  id: string;
  title: string;
  content: string;
  author: string;
}

const PostsQueryOptions = () => {
  return queryOptions({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get<Posts[]>("http://localhost:4001/posts");
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export default PostsQueryOptions;
