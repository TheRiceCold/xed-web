'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import * as z from 'zod'
import { Auth } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/shadcn-ui'
import { authStateEnum } from './AuthDialog'
import { signUpSchema } from '@/constants/zodSchemas'
import { signUpFields } from '@/constants/inputFields'
import { SignUpSchema } from '@/constants/formSchemas'
import MyForm from '../form/Form'

interface IProps {
  changeState: (state: authStateEnum) => void
}

const SignUp: FC<IProps> = ({ changeState }) => {
  const [submitData, setSubmitData] = useState({
    email: '',
    name: '',
    password: '',
    attributes: {
      email: '',
      birthdate: '',
      gender: 'UNKNOWN',
    }
  })

  const [showVerificationCode, setShowVerificationCode] = useState<boolean>(false)
  const formHook = useForm<z.infer<typeof SignUpSchema>>({ 
    resolver: zodResolver(SignUpSchema) 
  })

  const onSignUp = async (data) => {
    const { password, attributes } = data
    try {
      const { user } = Auth.signUp({
        username: data.email, 
        password, 
        attributes
      })
      console.log('Signed up a user', user)
    } catch (err) {
      throw err
    }
  }

  const onConfirmSignUp = async (data) => {
    const { email, password, verificationCode } = data
    try {
      await Auth.confirmSignUp(email, verificationCode)
      const amplifyUser = await Auth.signIn(email, password)
      if (amplifyUser) {
        router.push('')
      } else {
        throw new Error('Something went wrong:')
      } 
    } catch (err) {
      console.log('Error confirming sign up', err) 
    }
  }

  const onSubmit = async (data) => {
    try {
      if (!showVerificationCode) {
        onSignUp(data)
      } else {
        await confirmSignUp(data)
        setShowVerificationCode(true)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>Sign Up</DialogTitle>
        <DialogDescription>
          {'Sign up to see photos and videos from your friends.'}
        </DialogDescription>
      </DialogHeader>
      <MyForm 
        formHook={formHook}
        onSubmit={onSubmit}
        inputFields={signUpFields}
        submitLabel={showVerificationCode ? 'Verify Code' : 'Sign up'}
      />
      <div className='flex items-center space-x-2'>
        <DialogDescription>
          {'By continuing, you agree to our '}
          <Link href='/' className='hover:underline font-bold'>
            {'User Agreement'}
          </Link> 
            {' and acknowledge that you understand the '}
          <Link href='/' className='hover:underline font-bold'>
            {'Privacy Policy.'}
          </Link>
        </DialogDescription>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        {'Have an account?'}
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeState(authStateEnum.LOGIN)}
        > Log In
        </span>
      </DialogFooter>
    </>
  )
}

export default SignUp
