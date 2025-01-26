'use client'
import MainLayout from "@/common/mainLayout/mainLayout";
import RootLayout from "./layout";
import Image from 'next/image';
import styles from './page.module.css';
import { LoadScript } from '@react-google-maps/api';
import Map from "@/common/GoogleMap2/GoogleMap2";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { config } from 'dotenv';

config();
const mapskey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.toString() || "";
export default function Page() {
  config();
  return (

    <RootLayout>
      <MainLayout>

        <div className={styles.clinicaImgContainer}>
          <Image className={styles.logoImg} src='./Bipodal-clinica.jpg' alt="Interior Clinica Bipodal" width="500" height="700" style={{ position: "relative" }} />
        </div>
        <LoadScript {...{ "googleMapsApiKey": mapskey }}>
          <Map />
        </LoadScript>

      </MainLayout>
    </RootLayout>

  );

}
