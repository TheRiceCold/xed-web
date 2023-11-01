import { FC, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

import clsx from 'clsx'
import Avatar from '@/components/chat/ChatAvatar'

const ConversationBox: FC = ({ data, selected }) => {
  const router = useRouter()
  const otherUser = {
    name: data.name
  }

  const handleClick = useCallback(() => {
    router.push(`/chat/conversations/${data.id}`)
  }, [data.id, router])

  const lastMessage = useMemo(() => {
    const messages = data.message || []

    return messages[messages.length - 1]
  }, [data.messages])

  const userEmail = useMemo(() => {
    
  }, [])

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false
    }

    const seenArray = lastMessage.seen || []

    if (!userEmail) {
      return false
    }
    
    return seenArray.filter(user => user.email === userEmail).length !== 0
  }, [userEmail, lastMessage])

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image'
    }

    if (lastMessage?.body) {
      return lastMessage.body
    }

    return 'Started a conversation'
  }, [lastMessage])

  return (
    <div className={clsx(`
      w-full
      relative
      flex
      items-center
      p-3
      space-x-3
      hover:bg-neutral-100
      rounded-lg
      transition
      cursor-pointer
    `)} onClick={handleClick} 
    >
      <Avatar />
      <div className='min-w-0 flex-1'>
        <div className='focus:outline-none'>
          <div className='flex justify-between items-center mb-1'>
            <p className='text-md font-medium text-gray-900'>
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className='text-xs text-gray-400 font-light'>
                {format(new Date(lastMessage.createdAt), 'p')}
              </p>
            )}
          </div>
          <p className={clsx(
            'truncate text-sm',
            hasSeen ? 'text-gray-500' : 'text-black font-medium'
          )}>
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConversationBox
