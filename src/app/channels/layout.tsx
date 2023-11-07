import { FC, ReactNode } from 'react'
import ChatSidebar from '@/components/chat/sidebar/Sidebar'
import ChannelList from './_components/ChannelList'

interface IProps {
  children: ReactNode
}

const ChannelLayout: FC<IProps> = ({ children }) => (
  <ChatSidebar>
    <div className='h-full'>
      <ChannelList
        initialItems={[
          {
            id: '1',
            name: 'Channel 1'
          },
          {
            id: '2',
            name: 'Code with Wolly'
          }
        ]}
      />
      {children}
    </div>
  </ChatSidebar>
)

export default ChannelLayout
