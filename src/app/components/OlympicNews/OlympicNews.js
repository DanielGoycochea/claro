import Cards from '../Cards/Cards'
import styles from './OlympicNews.module.css'
import { news } from '../../constants/newsConstants'

export default function OlympicNews() {
  return (
    <section className={styles.olympics_news}>
      <h1 className={styles['olympics_news__title']}>
        CLARO SPORTS EN SOCHI 2014
      </h1>
      <div className={styles['olympics_news__container']}>
        <div className={styles['olympics_news__cards']}>
          {news.map((newsInfo) => (
            <Cards
              key={newsInfo.id}
              src={newsInfo.src}
              title={newsInfo.title}
              data={newsInfo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
