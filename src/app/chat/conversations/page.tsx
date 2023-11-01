'use client'
import clsx from 'clsx'

import { useConversation } from '@/hooks'
import EmptyState from '@/components/chat/EmptyState'

const ConversationPage = () => {
  const { isOpen } = useConversation()

  return (
    <div className={clsx(
      "lg:pl-80 h-screen lg:block",
      isOpen ? 'block': 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default ConversationPage
