
import MainLayout from "@/common/mainLayout/mainLayout";
import RootLayout from "./layout";
import Image from 'next/image';
import styles from './page.module.css';
// import bipodalClinica from './Bipodal-clinica.jpg';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Page() {
  return (

    <RootLayout>
      <MainLayout>
        <div className={styles.clinicaImgContainer}>
          <Image className={styles.logoImg} src='./Bipodal-clinica.jpg' alt="Interior Clinica Bipodal" width="500" height="700" style={{position: "relative"}}/>
        </div>
      </MainLayout>
    </RootLayout>

  );
}
