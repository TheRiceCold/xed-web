import { 
  LuHome, 
  LuBoxes,
  LuCode2,
  LuPalette,
  LuCompass,
  LuLineChart,
} from 'react-icons/lu'
import { FaChessPawn } from 'react-icons/fa'
import { TbBrandAppleArcade } from 'react-icons/tb'
import { SideNavItem } from '@/types/sideNavItems'

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: LuHome
  }, 
  {
    label: 'Trends',
    path: '/trends',
    icon: LuLineChart
  },
  {
    label: 'Explore',
    icon: LuCompass,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'Gaming', path: '/gaming' },
      { subLabel: 'Sports', path: '/sports' },
      { subLabel: 'Art', path: '/art' },
      { subLabel: 'Technology', path: '/technology' },
    ]
  },
  {
    label: 'Clusters',
    icon: LuBoxes,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'C++ Enthusiasts', path: '/c++-enthusiasts' },
      { subLabel: 'NextJS Developers', path: '/nextjs-developers' },
    ]
  },
  {
    label: 'Games',
    icon: TbBrandAppleArcade,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'Coding Challenges' },
      { subLabel: 'Chess' },
      { subLabel: 'Tetris' },
    ]
  },
  {
    label: 'Themes',
    path: '/themes',
    icon: LuPalette,
    subMenu: true,
    subMenuItems: [
      { label: 'Dark Mode'  },
      { label: 'Dracula' },
      { label: 'Nord' },
      { label: 'Gruvbox' },
    ]
  },
]
