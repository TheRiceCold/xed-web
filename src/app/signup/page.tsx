'use client'
import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, TextField, Snackbar, Grid, Alert } from '@mui/material'

interface IFormInput {
  username: string
  email: string
  password: string
  code: string
}

const Signup = () => {
  const [open, setOpen] = useState(false)
  const [showCode, setShowCode] = useState<boolean>(false)
  const [signUpError, setSignUpError] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Errors: ', errors)
    console.log(data)

    try {
      signUpWithEmailAndPassword(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return
    setOpen(false)
  }

  const signUpWithEmailAndPassword = async (data: IFormInput) => {
    const { username, password, email } = data
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
    } catch (error) {
      console.log('Error signing up: ', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <Grid container direction='column' alignItems='center' justify='center'>
        <Grid item>
          <TextField
            variant='outlined'
            id='username'
            label='Username'
            type='text'
            errors={errors.username ? 'true' : 'false'}
            helperText={errors.username ? errors.username.message : null}
            {...register('username', {
              required: { value: true, message: 'Please enter a username' },
              minLength: {
                value: 3,
                message: 'Please enter a username between 3-6 characters.'
              },
              maxLength: {
                value: 16,
                message: 'Please enter a username between 3-16 characters.'
              }
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            variant='outlined'
            id='email'
            label='Email'
            type='email'
            error={errors.email ? 'true' : 'false'}
            helperText={errors.email ? errors.email.message : null}
            {...register('email', {
              required: { value: true, message: 'Please enter a valid email.' }
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            variant='outlined'
            id='password'
            label='Password'
            type='password'
            error={errors.password ? 'true' : 'false'}
            helperText={errors.password ? errors.password.message : null}
            {...register('password', {
              required: { value: true, message: 'Please enter a password' },
              minLength: {
                value: 8,
                message: 'Please enter a stronger password'
              }
            })}
          />
        </Grid>

        <Grid style={{ marginTop: 16 }}>
          <Button variant='contained' type='submit'>
            Sign Up
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {signUpError}
        </Alert>
      </Snackbar>
    </form>
  )
}

export default Signup
