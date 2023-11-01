import { FC } from 'react'
import {
  Form,
  Body,
  Header,
} from '@/components/chat/conversation'
import EmptyState from '@/components/chat/EmptyState'

const ConversationId: FC<IProps> = () => {
  const conversation = {
    id: '32',
    name: 'Conversation name',
    isGroup: false
  }

  if (!conversation) {
    return (
      <div className='lg:pl-80 h-full'>
        <div className='h-full flex flex-col'>
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className='lg:pl-80 h-full'>
      <div className='h-full flex flex-col'>
        <Header conversation={conversation} />
        {/* <Body /> */}
        <Form />
      </div>
    </div>
  )
}

export default ConversationId
