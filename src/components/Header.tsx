import { FC, useRef, ReactElement } from 'react'
import Link from 'next/link'

import SearchInput from './SearchInput'
import { Button } from './shadcn-ui'

interface IProps {
  leftContent: ReactElement
}

const Header: FC<IProps> = ({ leftContent }) => (
  <header className="
    flex
    px-8
    z-10
    top-0
    fixed
    w-full
    h-[50px] 
    border-b
    bg-background
    justify-between
  ">
    <div className="
      ml-8
      flex 
      font-bold
      items-center 
      justify-between
    ">
      <Link href='/'>Xed</Link>
    </div>
    <Button>Search</Button>
    {/* <SearchInput /> */}
    {leftContent()}
  </header>
)

export default Header
