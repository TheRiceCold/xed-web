import { FC, ReactNode } from 'react'
import ChatSidebar from '@/components/chat/sidebar/Sidebar'
import ChatList from './_components/ChatList'

interface IProps {
  children: ReactNode
}

const ChatLayout: FC<IProps> = ({ children }) => (
  <ChatSidebar>
    <div className='h-full'>
      <ChatList
        initialItems={[
          {
            id: '1',
            name: 'Name 1'
          },
          {
            id: '2',
            name: 'Name 2'
          }
        ]}
      />
      {children}
    </div>
  </ChatSidebar>
)

export default ChatLayout
