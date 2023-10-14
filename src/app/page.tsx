import styles from './page.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant='h1'>Hello World!</Typography>
    </main>
  )
}
