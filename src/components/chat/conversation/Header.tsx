'use client'
import { FC, useMemo, useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft,
  MoreHorizontal
} from 'lucide-react'

import ProfileDrawer from './ProfileDrawer'
import Avatar from '@/components/chat/ChatAvatar'

// interface IProps {
//   conversation: Conversation & {
//     users: User[]
//   }
// }

const Header: FC = ({ conversation }) => {
  const otherUser = {
    name: 'Other user name',
    email: 'otheruser@email.com',
    createdAt: '2022-05-05T02:57:31Z'
  }
  const [drawerOpen, setDrawerOpen] = useState(false)

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }

    return 'Active'
  }, [conversation])
  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="
        bg-white
        w-full
        flex
        border-b-[1px]
        sm:px-4
        py-3
        px-4
        lg:px-6
        justify-between
        items-center
        shadow-sm
      ">
        <div className='flex gap-3 items-center'>
          <Link className="
            lg:hidden
            block
            text-sky-500
            hover:text-sky-600
            transition
            cursor-pointer
          " href='/chat/conversations'
          > 
            <ChevronLeft size={32} />
          </Link>
          <Avatar />
          <div className='flex flex-col'>
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>
        <MoreHorizontal 
          size={32} 
          className="cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        />
      </div>
    </>
  )
}

export default Header
