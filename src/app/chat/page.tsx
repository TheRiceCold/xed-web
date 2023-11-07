'use client'
import type { NextPage } from 'next'
import clsx from 'clsx'

import { useConversation } from '@/hooks'
import EmptyState from '@/components/chat/EmptyState'

const ChatPage: NextPage = () => {
  const { isOpen } = useConversation()

  return (
    <div className={clsx(
      'lg:pl-80 h-screen lg:block',
      isOpen ? 'block': 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default ChatPage
