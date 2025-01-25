import { ReactNode } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import Head from 'next/head';
import styles from './layout.module.css'

interface HeaderProps {
    children?: ReactNode
}
export default function Layout({children}:HeaderProps) {
  return (
    <html>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <body>
      <div className={styles.page}>
        <Header></Header>
        <main className={styles.main}>
        {children}
        </main>
      </div>
      <Footer></Footer>
    </body>
  </html>
  )
}