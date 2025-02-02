'use client'
import MainLayout from "@/common/mainLayout/mainLayout";
import RootLayout from "./layout";
import { config } from 'dotenv';
import GoogleMapComponent from '@/common/GoogleMapComponent/GoogleMapComponent';
import Bienvenido from '@/pages/bienvenido/bienvenido';
import styles from './page.module.css';
export default function Page() {
  config();
  return (

    <RootLayout>
      <MainLayout >
        <div className={styles.mainLayout}>
          <Bienvenido></Bienvenido>
          <GoogleMapComponent></GoogleMapComponent>
        </div>
      </MainLayout>
    </RootLayout>

  );

}
