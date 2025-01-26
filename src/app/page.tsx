'use client'
import MainLayout from "@/common/mainLayout/mainLayout";
import RootLayout from "./layout";
import Image from 'next/image';
import styles from './page.module.css';
import { config } from 'dotenv';
// import bipodalClinica from './Bipodal-clinica.jpg';
import GoogleMapComponent from '@/common/GoogleMapComponent/GoogleMapComponent';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Page() {
  config();
  return (

    <RootLayout>
      <MainLayout>
        <div id="asdasd" data-mode={process.env.NODE_ENV} data-ki={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} data-test={process.env.TEST}>
          asd: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }`
        </div>
        {process.env.TEST==="LOCAL" ? <div>local</div>:<div>not local</div>}
        <div className={styles.clinicaImgContainer}>
          <Image className={styles.logoImg} src='./Bipodal-clinica.jpg' alt="Interior Clinica Bipodal" width="500" height="700" style={{ position: "relative" }} />
        </div>
        <GoogleMapComponent></GoogleMapComponent>

      </MainLayout>
    </RootLayout>

  );

}
