
import styles from "./contacto.module.css";
import Layout from "@/common/mainLayout/mainLayout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Contacto() {
  return (
    <Layout>
      <div className={styles.contactoPage}>
        <h1>Pide tu cita</h1>

        <b>¿Dónde estamos?</b>

        <p>Avinguda Novelda, 54, 03010 Alacant, Alicante</p>

        <b>Horario de la clínica</b>
        <p>
          Lunes: 9:00 - 14:00 H.
          Martes: 9:00 - 14:00 / 16:00 - 20:00 H.
          Miércoles: 16:00 - 20:00 H.
          Jueves: 9:00 - 14:00 / 16:00 - 20:00 H.
          Viernes: 9:00 - 14:00 H.
        </p>
        <b>Información de contacto</b>
        <p>
          Teléfono: 633 11 25 51</p>
        <p>
          Email: info@bipodalpodologia.com
        </p>
        <p>
          * El horario puede sufrir variaciones en función de la agenda.
          * Se recomienda acudir a consulta habiendo concertado una cita previamente.
        </p>
          <iframe className={styles.map} loading="lazy" src="https://maps.google.com/maps?q=Avinguda%20Novelda%2C%2054%2C%2003010%20Alacant%2C%20Alicante&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="Avinguda Novelda, 54, 03010 Alacant, Alicante" aria-label="Avinguda Novelda, 54, 03010 Alacant, Alicante"></iframe>
  
      </div>
    </Layout>
  );
}
