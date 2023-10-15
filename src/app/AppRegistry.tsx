'use client'

import { Amplify } from 'aws-amplify'
import awsConfig from '@/aws-exports'
import AuthContext from '@/context/AuthContext'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/app/theme'

Amplify.configure({ ...awsConfig, ssr: true })

export default ({
  children
}: {
  children: React.ReactNode
}) => (
  <AuthContext>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AuthContext>
)
