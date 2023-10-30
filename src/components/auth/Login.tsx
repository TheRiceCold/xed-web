import {
  FC, 
  useState,
  Dispatch, 
  SetStateAction,
  SyntheticEvent, 
} from 'react'
import Image from 'next/image'
import { Auth } from 'aws-amplify'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  Input,
  Button,
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/shadcn-ui'
import { authStateEnum } from './AuthDialog'
import { loginSchema } from '@/constants/zodSchemas'
import { gmailIcon, facebookIcon } from '@/constants/images'

interface IProps {
  setEmail: Dispatch<SetStateAction<string>>
  changeState: (state: authStateEnum) => void
}

interface IFormInput {
  email: string, 
  password: string
}

const Login: FC<IProps> = ({ setEmail, changeState }) => {

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
          <Button onClick={() => changeState(authStateEnum.ENTER_LOGIN_PASSWORD)}>
            Continue 
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button variant='link' onClick={() => changeState(authStateEnum.FORGOT_PASSWORD)}>
            Forgot Password?
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        {"Don't have an account?"}
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeState(authStateEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default Login
