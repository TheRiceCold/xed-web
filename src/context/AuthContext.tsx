'use client'
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'
import { CognitoUser } from '@aws-amplify/auth'
import { Hub } from 'aws-amplify'

interface UserContextType {
  user: CognitoUser | null
  setUser: Dispatch<SetStateAction<CognitoUser>>
}

const UserContext = createContext<UserContextType>()

interface Props {
  children: ReactElement
}

const AuthContext = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<CognitoUser | null>(null)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    Hub.listen('auth', () => {

      checkUser()
    })
  }, [])

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticateUser()
      if (amplifyUser) {
        setUser(amplifyUser)
      }
    } catch (error) {
      // No current signed in user.
      setUser(null)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthContext

export const useUser = (): UserContextType => useContext(UserContext);
