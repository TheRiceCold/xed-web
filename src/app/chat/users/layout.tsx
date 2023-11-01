import { FC } from 'react'
import UserList from './_components/UserList'
import ChatSidebar from '@/components/chat/sidebar/Sidebar'

const ChatLayout: FC = ({ children }: ReactNode) => (
  <ChatSidebar>
    <UserList />
    {children}
  </ChatSidebar>
)

export default ChatLayout
