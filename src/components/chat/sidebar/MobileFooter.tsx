'use client'
import MobileItem from './MobileItem'
import { useConversation } from '@/hooks'
import { CHAT_SIDEBAR_ITEMS } from '@/constants/chatSidebarItems'

const MobileFooter = () => {
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <div className='
      fixed
      justify-between
      w-full
      bottom-0
      z-40
      flex
      items-center
      border-t-[1px]
      lg:hidden
    '>
      {CHAT_SIDEBAR_ITEMS.map(item => (
        <MobileItem 
          key={item.href}
          href={item.href}
          active={item.active}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter
