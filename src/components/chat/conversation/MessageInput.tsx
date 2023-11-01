import { FC } from 'react'

interface IProps {
  id: string
  placeholder: string
}

const MessageInput: FC<IProps> = ({
  id,
  placeholder
}) => {
  return (
    <div className='relative w-full'>
      <input 
        id={id}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-md
          focus:outline-none
        "
      />
    </div>
  )
}

export default MessageInput
