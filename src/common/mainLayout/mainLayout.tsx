'use client';
import { ReactNode } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './mainLayout.module.css'
import { Roboto } from 'next/font/google'

interface HeaderProps {
    children?: ReactNode
}
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function MainLayout({children}:HeaderProps) {
  return (
   <>
      <div className={`${roboto.className} ${styles.page}`}>
        <Header></Header>
        <main className={styles.main}>
        {children}
        </main>
      </div>
      <Footer></Footer>
      </>
 
  )
}