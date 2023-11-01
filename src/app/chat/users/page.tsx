import { FC } from 'react'

import EmptyState from '@/components/chat/EmptyState'

const ChatPage: FC = () => (
  <div className='hidden lg:block lg:pl-80 h-screen'>
    <EmptyState />
  </div>
)

export default ChatPage
