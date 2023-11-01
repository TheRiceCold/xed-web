import { 
  Home,
  Search,
  Users2,
  MessageCircle,
} from 'lucide-react'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useConversation } from './useConversation'

export const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      active: false
    },
    {
      label: 'Search',
      href: '/chat/search',
      icon: Search,
      active: pathname === '/chat/search' || !!conversationId
    },
    {
      label: 'Chat',
      href: '/chat/conversations',
      icon: MessageCircle,
      active: pathname === '/chat/conversations' || !!conversationId
    },
    {
      label: 'Users',
      href: '/chat/users',
      icon: Users2,
      active: pathname === '/chat/users'
    },
  ], [pathname, conversationId])

  return routes
}
