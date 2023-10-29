'use client'
import { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import {
  Button
} from '@/components/ui'

const Profile = () => {
  useEffect(() => {
    checkUser()
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser()
      console.log({ user })
    }
  }, [])

  return (
    <div>
      <h1>PROFILE</h1>
      <Button onClick={() => Auth.signOut()}>Sign Out</Button>
    </div>
  ) 
}

export default Profile
