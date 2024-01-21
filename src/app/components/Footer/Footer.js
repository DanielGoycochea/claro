import Image from 'next/image'
import style from './footer.module.css'
import { social } from '../../constants/socialConstants';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style['footer__navbar']}>
        <div className={style['footer__contact']}>
          <a href="#">Aviso de privacidad / contacto</a>
        </div>
        <div>
          <Image
            width={96}
            height={41}
            src="/img/logo-sochi-color.png"
            alt="Logo sochi"
          />
        </div>
        <div className={style['footer__social']}>
          {social.map((item) => (
            <Image
              key={item.name}
              width={30}
              height={30}
              src={item.src}
              alt={item.name}
            />
          ))}
        </div>
      </nav>
    </footer>
  )
}
