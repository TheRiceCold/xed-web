import { 
  LuHome,
  LuServer,
  LuMessageCircle,
} from 'react-icons/lu'
import { BsBroadcast } from 'react-icons/bs'

export const CHAT_SIDEBAR_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: LuHome,
  },
  {
    label: 'Chat',
    href: '/chat',
    icon: LuMessageCircle,
  },
  {
    label: 'Channels',
    href: '/channels',
    icon: BsBroadcast,
  },
]
