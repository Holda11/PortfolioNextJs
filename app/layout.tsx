import '../styles/globals.scss'
import { Raleway } from 'next/font/google'
import Link from 'next/link'


export const metadata = {
  title: 'Jan Holda - WebDeveloper',
  description: 'Generated by create next app',
}

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}` + ''}>
      <nav>
        <ul>
          <li className='Left'><Link href='/'><h1><span>J.</span>H.</h1></Link></li>
          <li><Link href='/Kdojsem'>Kdo Jsem?</Link></li>
          <li><Link href='/Dovednosti'>Dovednosti</Link></li>
          <li><Link href='/Sluzby'>Služby</Link></li>
          <li><Link href='/Kontakt'>Kontakt</Link></li>
        </ul>
      </nav>
        {children}
        <footer>
          <ul>
            Ahoj
          </ul>
        </footer>
      </body>
    </html>
  )
}
