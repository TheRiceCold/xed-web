import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownToLine } from 'lucide-react'

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/shadcn-ui'
import { appleAppStore, googlePlayStore } from '@/constants/images'

const AuthDialog = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <ArrowDownToLine className='mr-2 h-4 w-4' /> Get app
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Get Xed App</DialogTitle>
          <DialogDescription>
            Download and install our application.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <Link href='/' className='grid flex-1 gap-4'>
            <Image 
              alt='Apple App Store'
              src={appleAppStore}
            />
          </Link>
          <Link href='/' className='grid flex-1 gap-4'>
            <Image 
              alt='Google Play Store'
              src={googlePlayStore}
            />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
