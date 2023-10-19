'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '@/components'
import { useUser } from '@/context'
import { signupInputs as inputFields } from '@/constants'

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
      console.log('Successs, signed in a user', amplifyUser)
      if (amplifyUser) {
        router.push(`/`)
      } else {
        throw new Error('Something went wrong :')
      }
    } catch (err) {
      console.log('error confirming sign up', err)
    }
  }

  console.log('The value of the user from the hook is:', user)

  return (
    <Form
      inputFields={inputFields(formHook.watch)}
      submitLabel='Sign Up'
      alertMessage={signUpError}
      formHook={formHook}
    />
  )
}

export default Signup

interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  verificationCode: string
}
