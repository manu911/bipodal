'use client'
import styles from './dondeEstamos.module.css';
import GoogleMapComponent from '@/common/GoogleMapComponent/GoogleMapComponent';

export default function DondeEstamos() {
    return (

        <div className={styles.containerPageDondeEstamos}>
            <h2 className={styles.title}>¿Dónde estamos?</h2>
            <div className={styles.containerMap}>
                <GoogleMapComponent></GoogleMapComponent>
            </div>

        </div>
    );

}
