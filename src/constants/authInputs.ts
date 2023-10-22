const authInputs = [
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
]

export default authInputs
