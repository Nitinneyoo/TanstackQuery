import Aboutscreen from '@/AboutPage/Aboutscreen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: Aboutscreen,
})

