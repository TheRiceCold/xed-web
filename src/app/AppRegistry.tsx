'use client'

import { Amplify } from 'aws-amplify'
import awsConfig from '@/aws-exports'

import { AuthContext } from '@/context'

Amplify.configure({ ...awsConfig, ssr: true })

const AppRegistry = ({
  children
}: {
  children: React.ReactNode
}) => (
  <AuthContext>
    {children}
  </AuthContext>
)

export default AppRegistry
