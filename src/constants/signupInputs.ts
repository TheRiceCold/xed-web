import { UseFormReturn } from 'react-hook-form'

const signupInputs = (watch: UseFormReturn['watch']) => [
  {  // EMAIL
    id: 'email',
    type: 'email',
    label: 'Email',
    validations: {
      required: {
        value: true, message: 'Please enter an email.'
      },
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
        message: 'Please enter a valid email.'
      }
    }
  },
  {  // PASSWORD
    id: 'password',
    type: 'password',
    label: 'Password',
    validations: {
      required: { value: true, message: 'Please enter a password.' },
      minLength: {
        value: 8,
        message: 'Please enter a stronger password.'
      }
    }
  },
  {  // CONFIRM PASSWORD
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
  }
]

export default signupInputs
