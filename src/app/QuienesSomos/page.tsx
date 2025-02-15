
// import styles from "./page.module.css";
import Layout from "@/common/mainLayout/mainLayout";
import styles from './quienesSomos.module.css';
import Image from 'next/image';
export default function QuienesSomos() {
  return (
    <Layout>
      <section className={styles.section}>
        <h1 className={styles.title}>Alejandro García, tu podólogo de confianza en Alicante</h1>

        <div className={styles.imageContainer}>
          <Image
            fill={true}
            objectFit="contain"
            className={styles.image}
            src={'braz2.png'}
            alt={'garci currando'} />

        </div>
      </section>
    </Layout>
  );
}
