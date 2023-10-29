import {
  FC, 
  Dispatch, 
  SetStateAction,
  SyntheticEvent, 
} from 'react'
import { ArrowRight } from 'lucide-react'
import { Auth } from 'aws-amplify'
import Image from 'next/image'

import {
  Input,
  Button,
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui'
import { 
  gmailIcon, 
  facebookIcon 
} from '@/constants/images'
import { authContentEnum } from '../AuthDialog'

interface IProps {
  setEmail: Dispatch<SetStateAction<string>>
  changeContent: (content: authContentEnum) => void
}

const LoginDisplay: FC<IProps> = ({ setEmail, changeContent }) => {
  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>XED</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        {"Welcome to your corner of the internet. You'll never be bored again."}
      </DialogDescription>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Button 
            variant='outline'
            onClick={() => Auth.federatedSignIn({ provider: "Google" })}
          >
            <Image 
              src={gmailIcon}
              alt='gmail icon'
              className='mr-2 h-4 w-4'
            /> Login with Gmail
          </Button>
          <Button 
            variant='outline'
            onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
          >
            <Image 
              src={facebookIcon}
              alt='facebook icon'
              className='mr-2 h-4 w-4'
            /> Login with Facebook
          </Button>
          <span className='flex justify-center'>
            OR
          </span>
          <span className='text-sm'>Login with email</span>
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
        {"Don't have an account?"}
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeContent(authContentEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default LoginDisplay
