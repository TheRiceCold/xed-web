import { FC } from 'react'
import { 
  useRouter,
  usePathname, 
} from 'next/navigation'
import { 
  LogIn,
  SunMoon,
  Languages,
  HelpCircle,
  MoreVertical,
} from 'lucide-react'
import Link from 'next/link'
import { 
  Button, 
  Switch, 
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui'
import NavSearch from './NavSearch'
import { 
  AuthDialog, 
  GetAppDialog 
} from '@/components'

const Navbar: FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className='fixed bg-white z-30 flex items-center w-full border-b h-[60px]'>
      <nav className={
        `flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`
      }>
        <Link href='/'>Xed</Link>
        <NavSearch />

        <div className='flex items-center gap-3'>
          <AuthDialog triggerComponent={() => <Button>Log In</Button>}/>
          <GetAppDialog />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MoreVertical className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <LogIn className='mr-2 h-4 w-4' />
                  <span>Login / Sign Up</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Languages className='mr-2 h-4 w-4' />
                  <span>Language</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SunMoon className='mr-2 h-4 w-4' />
                  <span className='pr-2'>Theme</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className='mr-2 h-4 w-4' />
                  <span>Help and feedback</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
