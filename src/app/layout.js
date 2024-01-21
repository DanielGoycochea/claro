import { Exo } from 'next/font/google'
import './globals.css'

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Claro',
  description: 'Ejercicio de prueba para Claro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={exo.className}>{children}</body>
    </html>
  )
}
