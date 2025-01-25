import { ReactNode } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './layout.module.css'

interface HeaderProps {
    children?: ReactNode
}
export default function Layout({children}:HeaderProps) {
  return (
   <>
      <div className={styles.page}>
        <Header></Header>
        <main className={styles.main}>
        {children}
        </main>
      </div>
      <Footer></Footer>
      </>
 
  )
}