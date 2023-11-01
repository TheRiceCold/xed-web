'use client'
import { useState } from 'react'
import { useRoutes } from '@/hooks'
import { Menu } from 'lucide-react'
import useConversation from '@/hooks/useConversation'
import Avatar from '@/components/chat/ChatAvatar'
import DesktopItem from './DesktopItem'

const DesktopSidebar = () => {
  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='
      hidden
      lg:fixed
      lg:inset-y-0
      lg:left-0
      lg:z-40
      xl:px-2
      lg:overflow-y-auto
      lg:bg-white
      lg:border-r-[1px]
      lg:pb-4
      lg:flex
      lg:flex-col
      justify-between
    '>
      <nav className='
        mt-4
        flex
        flex-col
        justify-between
      '>
        <ul role='list' className='flex flex-col items-center space-y-1'>
          {routes.map(item => (
            <DesktopItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
      <nav className="
        mt-4
        flex
        flex-col
        justify-between
        items-center
      ">
        <div className="
          hover:opacity-75 
          cursor-pointer 
          transition"
          onClick={() => setIsOpen(true)}
        > 
          <div className="
            group
            flex
            gap-x-3
            round-md
            p-3
            text-sm
            leading-6
            font-semibold
            text-gray-500
            hover:text-black
            hover:bg-gray-100" 
          >
            <Menu />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DesktopSidebar
