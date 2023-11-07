'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuSearch, LuPenLine } from 'react-icons/lu'
import clsx from 'clsx'

import { Button } from '@/components/shadcn-ui'
import { useConversation } from '@/hooks'
import ChannelBox from './ChannelBox'

const ChannelList: FC = ({ initialItems }) => {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const { conversationId, isOpen } = useConversation()

  return (
    <aside className={clsx(`
      fixed
      pb-20
      inset-y-0
      lg:pb-0
      lg:w-80
      lg:block
      lg:left-16
      border-r
      overflow-y-auto`, 
      isOpen ? 'hidden' : 'block w-full left-0'
    )}>
      <div className="
        flex 
        mb-2
        py-2
        pl-4
        pr-2
        border-b 
        items-center 
        justify-between 
      ">
        <p className='text-lg font-bold'>Channels</p>
        <Button size={1} variant='outline' className='p-2'>
          <LuPenLine size={18} />
        </Button>
      </div>
      <Button 
        variant='outline' 
        className="
          mb-2 
          ml-2
          gap-2 
          w-full 
          w-[95%]
          justify-start"
        >
        <LuSearch size={16} />
        <p className='text-base'>Search</p>
      </Button>
      {initialItems.map((data, idx) => (
        <ChannelBox key={`${data.id}-${idx}`} data={data} />
      ))}
    </aside>
  )
}

export default ChannelList
