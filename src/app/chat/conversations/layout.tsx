import { ReactNode } from 'react'
import ChatSidebar from '@/components/chat/sidebar/Sidebar'
import ConversationList from './_components/ConversationList'

const ConversationLayout = ({ children }: { 
  children: ReactNode 
}) => {
  return (
    <ChatSidebar>
      <div className='h-full'>
        <ConversationList
          initialItems={[
            {
              id: '1',
              name: 'Name 1'
            }
          ]}
        />
        {children}
      </div>
    </ChatSidebar>
  )
}

export default ConversationLayout
