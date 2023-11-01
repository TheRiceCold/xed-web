'use client'
import { 
  FC, 
  useRef,
  useState, 
  useEffect,
} from 'react'

import MessageBox from './MessageBox'

const Body: FC = () => {
  const [messages, setMessages] = useState([])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
     
  }, [])

  return (
    <div className='flex-1 overflow-y-auto'>
      <MessageBox isLast={i === messages.length - 1} data={message} />
      <div ref={bottomRef} className='pt-24' />
    </div>
  )
}

export default Body
