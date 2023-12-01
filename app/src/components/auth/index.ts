export { default as LoginEmail } from './login/LoginEmail'
export { default as LoginPassword } from './login/LoginPassword'

export { default as SignUp } from './signup/SignUp'
export { default as ResetPassword } from './ResetPassword'

export enum authStateEnum {
  SIGNUP = 'SIGNUP',
  LOGIN_EMAIL = 'LOGIN_EMAIL',
  LOGIN_PASSWORD = 'LOGIN_PASSWORD',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
}
