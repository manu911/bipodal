'use client'
import Image from 'next/image';
import styles from './bienvenido.module.css';
import { config } from 'dotenv';


export default function Bienvenido() {
    config();
    return (

        <div className={styles.containerPageBienvenido}>
            <div className={styles.textContainer}>
                <h1>Bienvenido a nuestra clínica podológica</h1>
                <p>En nuestro rincón dedicado al bienestar podológico, nos enorgullece ser tus guías en el camino hacia unos pies más saludables y una vida sin molestias. En Clínica de Podología Bipodal, liderada por el apasionado podólogo Alejandro García, entendemos que tus pies no solo te llevan a lugares, sino que también merecen una atención especializada. Aquí, en nuestra clínica, no solo tratamos los problemas podológicos, sino que también creamos una experiencia centrada en ti. Nos apasiona aliviar el dolor, mejorar la movilidad y asegurarnos de que cada paso que des sea más cómodo y saludable. A continuación, destacamos algunas de las ventajas que hacen que nuestra clínica sea única y especial: </p>
            </div>

            <div className={styles.clinicaImgContainer}>
                <Image className={styles.logoImg} src='./Bipodal-clinica.jpg' alt="Interior Clinica Bipodal" width="500" height="700" style={{ position: "relative" }} />
            </div>

        </div>
    );

}
