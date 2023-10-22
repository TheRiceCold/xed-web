'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from 'aws-amplify'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '@/components'
import { authInputs } from '@/constants'

const Login = () => {
  const router = useRouter()
  const formHook = useForm<IFormInput>()
  const [loginError, setLoginError] = useState<string>('')

  const onSubmit: SubmitHandler<IFormInput> = async ({
    email,
    password
  }: IFormInput) => {
    try {
      await Auth.signIn(email, password)
      router.push(`/`)
    } catch (err: any) {
      console.error(err)
      setLoginError(err.message)
    }
  };

  return (
    <Form 
      inputFields={authInputs}      
      submitLabel='Sign In'
      formHook={formHook}
      onSubmit={onSubmit}
      alertMessage={loginError}
    />
  )
}

interface IFormInput {
  email: string
  password: string
}

export default Login
