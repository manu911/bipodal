'use client'
import MainLayout from "@/common/mainLayout/mainLayout";
import RootLayout from "./layout";
import Image from 'next/image';
import styles from './page.module.css';
// import bipodalClinica from './Bipodal-clinica.jpg';
import GoogleMapComponent from '@/common/GoogleMapComponent/GoogleMapComponent';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Page() {
  // const apikey = "AIzaSyBj9pCmkot1V4dFwULstgrpXrr0rQrmHaA";
  return (

    <RootLayout>
      <MainLayout>
        <div className={styles.clinicaImgContainer}>
          <Image className={styles.logoImg} src='./Bipodal-clinica.jpg' alt="Interior Clinica Bipodal" width="500" height="700" style={{ position: "relative" }} />
        </div>
      <GoogleMapComponent></GoogleMapComponent>

        {/* <iframe
          width="450"
          height="250"
          {...{ "referrerpolicy=": "no-referrer-when-downgrade" }}
          style={{ border: 0 }}
          src={"https://www.google.com/maps/embed/v1/place?key=" + apikey + "&q=Clínica+de+Podología+Bipodal&center=37.423725,-122.09137&zoom=18"}

        >
        </iframe> */}
     {/*
        <div id="map"></div>
      {
            (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={ });var d=b.maps||(b.maps={ }),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await(a = m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
            key: "AIzaSyCHeO-IKzko43rZXgaSV7V6RgEDyn1LoHM",
          v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  })} */}
     
      </MainLayout>
    </RootLayout>

  );
}
