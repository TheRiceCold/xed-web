'use client'
import { FC } from 'react'
import { Image, SendHorizontal } from 'lucide-react'
import { useConversation } from '@/hooks'
import MessageInput from './MessageInput'

const Form: FC = () => {
  const { conversationId } = useConversation()

  return (
    <div className="
      py-4
      px-4
      bg-white
      border-1
      flex
      items-center
      gap-2
      lg:gap-4
      w-full
    ">
      <Image size={30} className='text-gray-500 cursor-pointer' />
      <form className='flex items-center gap-2 lg:gap-4 w-full'>
        <MessageInput id='message' placeholder='Write a message' />
        <button type='submit' className="p-2 bg-black rounded-md cursor-pointer">
          <SendHorizontal size={18} className='text-white' />
        </button>
      </form>
    </div>
  )
}

export default Form
