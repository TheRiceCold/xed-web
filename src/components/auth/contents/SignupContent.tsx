import { FC } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

import {
  Input,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,

  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,

  Separator
} from '@/components/ui'
import { authContentEnum } from '../AuthDialog'
import BirthdaySelect from './BirthdaySelect.tsx'

interface IProps {
  changeContent: (content: authContentEnum) => void
}

const SignupContent: FC<IProps> = ({ changeContent }) => {

  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>Sign up</DialogTitle>
        <DialogDescription>
          {'Sign up to see photos and videos from your friends.'}
        </DialogDescription>
      </DialogHeader>

      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder='Email' />
          <Input placeholder='Name' />
          <div className='flex'>
            <Input type='password' placeholder='Password' />
            <Button variant='ghost' className='absolute right-6'>
              {/* <Eye className='h-4 w-4' /> */}
              <EyeOff className='h-4 w-4' />
            </Button>
          </div>
          <Separator />
          <span className='text-sm'>Date of birth</span>
          <BirthdaySelect />
          <span className='text-sm'>Gender</span>
          <Input placeholder='Verify Code' />
          <Button onClick={() => changeContent(authContentEnum.ENTER_LOGIN_PASSWORD)}>
            Next
          </Button>
          <DialogDescription>
            {'By continuing, you agree to our '}
            <Link href='/' className='hover:underline font-bold'>
              User Agreement
            </Link> 
              {' and acknowledge that you understand the '}
            <Link href='/' className='hover:underline font-bold'>
              Privacy Policy.
            </Link>
          </DialogDescription>
        </div>
      </div>

      <DialogFooter className='sm:justify-normal text-sm'>
        {"Have an account?"}
        <span 
          onClick={() => changeContent(authContentEnum.LOGIN)}
          className='ml-2 hover:underline cursor-pointer' 
        > Log In
        </span>
      </DialogFooter>
    </>
  )
}

export default SignupContent
