'use client'
import styles from './dondeEstamos.module.css';
import GoogleMapComponent from '@/common/GoogleMapComponent/GoogleMapComponent';

export default function DondeEstamos() {
    return (

        <div className={styles.containerPageDondeEstamos}>
            <h2>¿Dónde estamos?</h2>
            <GoogleMapComponent></GoogleMapComponent>

        </div>
    );

}
