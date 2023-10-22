'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '@/components'
import { useUser } from '@/context'
import { authInputs } from '@/constants'

const Signup = () => {
  const { user } = useUser()
  const router = useRouter()
  const [signUpError, setSignUpError] = useState<string>('')
  const [isSubmitError, setIsSubmitError] = useState<boolean>(false)
  const [showVerificationCode, setShowVerificationCode] = useState<boolean>(false)
  const formHook = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showVerificationCode) {
        confirmSignUp(data)
      } else {
        await signUpWithEmailAndPassword(data)
        setShowVerificationCode(true)
      }
    } catch (err: any) {
      console.error(err)
      setSignUpError(err.message)
      setIsSubmitError(true)
    }
  }

  const signUpWithEmailAndPassword = async (
    data: IFormInput
  ): Promise<CognitoUser> => {
    const { email, password } = data
    try {
      const { user } = await Auth.signUp({ username: email, password })
      console.log('Signed up a user', user)
      return user
    } catch (error) {
      throw error
    }
  }

  const confirmSignUp = async (data: IFormInput) => {
    const { email, password, verificationCode } = data
    try {
      await Auth.confirmSignUp(email, verificationCode)
      const amplifyUser = await Auth.signIn(email, password)
      console.log('Success, signed in a user', amplifyUser)
      if (amplifyUser) {
        router.push(`/`)
      } else {
        throw new Error('Something went wrong :')
      }
    } catch (err) {
      console.log('error confirming sign up', err)
    }
  }

  return (
    <>
      {showVerificationCode ? (
        <Form 
          inputFields={[{
            id: 'verificationCode',
            label: 'Verification Code',
            validations: {
              required: { value: true, message: 'Please enter a code.' },
              minLength: {
                value: 6,
                message: 'Your verification is 6 characters long.',
              },
              maxLength: {
                value: 6,
                message: 'Your verification is 6 characters long.',
              },
            }
          }]}
          submitLabel='Confirm Code'
          formHook={formHook}
          onSubmit={onSubmit}
        />
      ) : (
        <Form
          inputFields={[...authInputs, {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            validations: {
              required: { value: true, message: 'Please confirm password' },
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Your passwords do no match'
                }
              }
            }
          }]}
          submitLabel='Sign Up'
          alertMessage={signUpError}
          formHook={formHook}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default Signup

interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  verificationCode: string
}
