import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles['header__navbar']}>
        <Image
          width={96}
          height={41}
          src="/img/logo-sochi-color.png"
          alt="Logo soshi"
        />
        <Image
          width={96}
          height={41}
          src="/img/logo-claro-sports.png"
          alt="Logo claro"
        />
      </nav>
    </header>
  )
}
