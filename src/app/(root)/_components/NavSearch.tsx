import Link from 'next/link'
import { 
  Input,
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/ui'

const NavSearch = () => (
  <div className='relative hidden md:flex items-center justify-end p-1 max-w-[430px] w-full'>
    <Input placeholder='Search...' />
    <div className='absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1'>
      <div className='p1'>
        <Link
          href={`/profile/1`}
          className='flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white'
        >
          <div className='flex items-center'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@wolly" />
              <AvatarFallback>DW</AvatarFallback>
            </Avatar>
            <div className='truncate ml-2'>Dale Wolly</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default NavSearch
