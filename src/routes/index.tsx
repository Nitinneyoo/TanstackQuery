import { createFileRoute } from '@tanstack/react-router'
import { PostsList } from '../HomePage/posts-list'

export const Route = createFileRoute('/')({
  component: PostsList,
})
