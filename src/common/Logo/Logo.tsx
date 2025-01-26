'use client';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Size } from '@/utils/types.module';
import { Roboto } from 'next/font/google'
import styles from './logo.module.css';

interface LogoProps {
    children?: ReactNode
    size?: Size;
}
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Logo({ children, size = Size.XS }: LogoProps) {
   
    let heightLogo = 100;
    let widthLogo = 120;
    let srcLogo="./Logo-L.png";
 
        switch (size) {
            case Size.XXS:
                heightLogo = 35;
                widthLogo = 45;
                srcLogo="./Logo-S.png";
            break;
            case Size.XS:
                heightLogo = 50;
                widthLogo = 60;
                srcLogo="./Logo-S.png";
            break;
            case Size.S:
                heightLogo = 100;
                widthLogo = 120;
                srcLogo="./Logo-S.png";
            break;
            case Size.M:
                heightLogo = 220;
                widthLogo = 280;
                srcLogo="./Logo-S.png";
            break;
            case Size.L:
                heightLogo = 360;
                widthLogo = 420;
                srcLogo="./Logo-L.png";
              
            break;
    
            default:
            break;
        }

    
    return (
        <div className={styles.logoContainer}>
            <Image
                src={srcLogo}
                width={widthLogo}
                height={heightLogo}
                className='logo-img'
                alt="Logo Bipodal"
                priority
            />
          {
            size === Size.XXS ? 
            <span className={`${roboto.className}  ${styles.bipodalTitle} ${styles.sizeXXS}`}>BIPODAL</span>
          :
            <span className={`${roboto.className}  ${styles.bipodalTitle}`}>BIPODAL</span>
          }

            {children}
        </div>
    )
}