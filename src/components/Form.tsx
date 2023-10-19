'use client'
import {
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import {
  Grid,
  Alert,
  Button,
  Snackbar,
} from '@mui/material'
import { UseFormReturn } from 'react-hook-form'

import { inputFieldsType } from '@/types'
import TextInput from './TextInput'
import PasswordInput from './PasswordInput'

const Form = ({
  inputFields,
  onSubmit,
  formHook,
  alertMessage,
  submitLabel
}: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = formHook
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return
    setShowAlert(false)
  }

  const inputType = (input: inputFieldsType) => {
    switch (input.type) {
      case 'password':
        return (
          <PasswordInput
            register={register}
            errors={errors}
            {...input}
          />
        )
      case 'tel':
      // return <PhoneInput {...props} />
      case 'select':
      // return <SelectInput {...props} />
      case 'radio':
      // return <RadioGroup {...props} />
      case 'textarea':
      // return <TextArea {...props} />
      case 'image':
      // return <ImageUpload {...props} />
      default:
        return (
          <TextInput
            register={register}
            errors={errors}
            {...input}
          />
        )
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <Grid container direction='column' alignItems='center' justify='center'>
        {inputFields.map((input: inputFieldsType, idx: number) => (
          <Grid item key={`${input.id}-${idx}`} width={350}>
            {inputType(input)}
          </Grid>
        ))}

        <Grid style={{ marginTop: 16 }}>
          <Button variant='contained' type='submit'>
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity='error'>
          {alertMessage}
        </Alert>
      </Snackbar>
    </form>
  )
}

export default Form

interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  verificationCode: string
}

interface IProps {
  inputFields: Array<inputFieldsType>
  onSubmit: () => void
  formHook: UseFormReturn<IFormInput>
  alertMessage: string
  submitLabel: string
}
