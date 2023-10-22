import type { Metadata } from 'next'
import AppRegistry from './AppRegistry'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xed',
  description: 'Social Media Web App.',
  icons: {
    icon: [
      {
        media: '{prefers-color-scheme: light}',
        url: '/logo.svg',
        href: '/logo.svg'
      },
      {
        media: '{prefers-color-scheme: dark}',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg'
      }
    ]
  }
}

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => (
  <html lang='en'>
    <body>
      <AppRegistry>{children}</AppRegistry>
    </body>
  </html>
)

export default AppLayout
