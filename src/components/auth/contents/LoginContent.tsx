import { 
  FC, 
  Dispatch, 
  SetStateAction,
  SyntheticEvent, 
} from 'react'
import { 
  Mail,
  ArrowRight, 
} from 'lucide-react'

import {
  Input,
  Button,
  DialogHeader, DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui'
import { authContentEnum } from '../AuthDialog'

interface IProps {
  setEmail: Dispatch<SetStateAction<string>>
  changeContent: (content: authContentEnum) => void
}

const LoginDisplay: FC<IProps> = ({ setEmail, changeContent }) => {
  return (
    <>
      <DialogHeader>
        {/* <DialogDescription> */}
          {/* {'By continuing, you agree to our '} */}
          {/* <Link href='/' className='hover:underline font-bold'> */}
          {/*   User Agreement */}
          {/* </Link>  */}
          {/*   {'and acknowledge that you understand the '} */}
          {/* <Link href='/' className='hover:underline font-bold'> */}
          {/*   Privacy Policy. */}
          {/* </Link> */}
        {/* </DialogDescription> */}
      </DialogHeader>
      <DialogTitle className='text-2xl'>XED</DialogTitle>
      <DialogDescription>
        Welcome to your corner of the internet. You'll never be bored again.
      </DialogDescription>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Button variant='outline'>
            <Mail className='mr-2 h-4 w-4' /> Login with Gmail
          </Button>
          <Button variant='outline'>
            <Mail className='mr-2 h-4 w-4' /> Login with Apple
          </Button>
          <span className='flex justify-center'>
            OR
          </span>
          <Input 
            type='email' 
            placeholder='Email or username' 
            onChange={(e: SyntheticEvent) => {
              const target = e.target as HTMLInputElement;
              setEmail(target.value);
            }}
          />
          <Button onClick={() => changeContent(authContentEnum.ENTER_LOGIN_PASSWORD)}>
            Continue 
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button variant='link' onClick={() => changeContent(authContentEnum.FORGOT_PASSWORD)}>
            Forgot Password?
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        Don't have an account?
        <span 
          onClick={() => changeContent(authContentEnum.SIGNUP)}
          className='ml-2 hover:underline cursor-pointer' 
        > Sign up
        </span>
        {/* <DialogClose asChild> */}
        {/*   <Button>Login</Button> */}
        {/* </DialogClose> */}
      </DialogFooter>
    </>
  )
}

export default LoginDisplay
