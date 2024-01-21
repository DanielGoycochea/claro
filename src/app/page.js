import dynamic from 'next/dynamic'
import { Providers } from './providers'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OlympicNews from './components/OlympicNews/OlympicNews'

const Home = () => {
  return (
    <main>
      <Providers>
        <Header />
        <Hero />
        <OlympicNews />
        <Footer />
      </Providers>
    </main>
  )
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
})
