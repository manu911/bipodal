import { ReactNode } from 'react';
import Image from 'next/image';
import { Size } from '@/utils/types.module';

interface LogoProps {
    children?: ReactNode
    size?: Size;
}

export default function Logo({ children, size = Size.XS }: LogoProps) {
   
    let heightLogo = 100;
    let widthLogo = 120;
    let heightText = 100;
    let widthText = 120;
    let srcLogo="/Logo-L.png";
    let srcText="/BIPODAL-Text-S.png";

  
        switch (size) {
            case Size.XS:
                heightLogo = 50;
                widthLogo = 60;
                srcLogo="/Logo-S.png";
                heightText = 50;
                widthText = 170;
                srcText="/BIPODAL-Text-S.png";
            break;
            case Size.S:
                heightLogo = 100;
                widthLogo = 120;
                srcLogo="/Logo-S.png";
                heightText = 100;
                widthText = 280;
                srcText="/BIPODAL-Text-S.png";
            break;
            case Size.M:
                heightLogo = 220;
                widthLogo = 280;
                srcLogo="/Logo-S.png";
                heightText = 220;
                widthText = 360;
                srcText="/BIPODAL-Text-S.png";
            break;
            case Size.L:
                heightLogo = 360;
                widthLogo = 420;
                srcLogo="/Logo-L.png";
                heightText = 360;
                widthText = 550;
                srcText="/BIPODAL-Text-L.png";
            break;
    
            default:
            break;
        }

    
    return (
        <div>
            <Image
                src={srcLogo}
                width={widthLogo}
                height={heightLogo}
                className='logo-img'
                alt="Logo Bipodal"
                priority
            />
            <Image
                src={srcText}
                width={widthText}
                height={heightText}
                className='logo-img'
                alt="Logo Bipodal"
                priority
            />

            {children}
        </div>
    )
}