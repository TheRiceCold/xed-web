'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserPlus2 } from 'lucide-react'
import clsx from 'clsx'

import { useConversation } from '@/hooks'
import ConversationBox from './ConversationBox'

const ConversationList: FC = ({
  initialItems
}) => {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const { conversationId, isOpen } = useConversation()

  return (
    <aside className={clsx(`
      fixed
      inset-y-0
      pb-20
      lg:pb-0
      lg:left-16
      lg:w-80
      lg:block
      overflow-y-auto
      border-r
      border-gray-200`, 
      isOpen ? 'hidden' : 'block w-full left-0'
    )}>
      <div className='px-4'>
        <div className='flex justify-between mb-4 pt-4'>
          <div className='
            text-xl
            font-bold
            text-neutral-800
          '> Messages
          </div>
          <div className='
            rounded-full
            p-2
            bg-gray-100
            text-gray-600
            cursor-pointer
            hover:opacity-75
            transition
          '>
            <UserPlus2 size={20} />
          </div>
        </div>
        {initialItems.map((data, idx) => (
          <ConversationBox 
            key={`${data.id}-${idx}`}
            data={data} 
          />
        ))}
      </div>
    </aside>
  )
}

export default ConversationList
