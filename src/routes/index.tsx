import { createFileRoute } from '@tanstack/react-router'
import { PostsList } from '../components/HomePage/posts-list'

export const Route = createFileRoute('/')({
  component: PostsList,
})
