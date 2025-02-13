'use client'
import Ribbon from '@/common/ribbon/ribbon';
import styles from './Servicios.module.css';
import Layout from "@/common/mainLayout/mainLayout";

interface RibbonProps {
  title: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary'| 'quaternary';
  imgLeft?: boolean;
}
export default function Servicios() {
  
  const data : Array<RibbonProps>=[
    {
    title: 'Ofrecemos nuestros servicios de podología a domicilio',
    imgSrc: './papilomaPlantar.jpg',
    imgAlt: 'pies',
    buttonText: 'Pide tu cita a domicilio',
    children: `En Clínica Bipodal, llevamos la excelencia de nuestros servicios directamente a tu hogar. Entendemos que la comodidad es clave cuando se trata de cuidar de tu salud podológica, por lo que ofrecemos nuestros servicios de podología a domicilio. Ya sea que te encuentres con limitaciones de movilidad, prefieras la privacidad de tu espacio o simplemente busques la máxima conveniencia, nuestro equipo de podólogos expertos está listo para brindarte el mismo nivel de atención especializada que encontrarías en nuestra clínica. Agenda tu cita y permite que el cuidado podológico se adapte a tu estilo de vida, llevando la calidad de nuestros servicios directamente a tu puerta.`,
    variant: 'primary',
    imgLeft: false
  },
  {
    title: 'Papiloma plantar',
    imgSrc: './papilomaPlantar.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.`,
    variant: 'secondary',
    imgLeft: true
  },
  {
    title: 'Pedidos a domicilio',
    imgSrc: '',
    imgAlt: '',
    buttonText: '',
    children: `La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.`,
    variant: 'quaternary',
    imgLeft: true
  }, 
  {
    title: 'Papiloma plantar',
    imgSrc: './papilomaPlantar.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.`,
    variant: 'secondary',
    imgLeft: true
  },
  {
    title: 'Pedidos a domicilio',
    imgSrc: '',
    imgAlt: '',
    buttonText: '',
    children: `La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.`,
    variant: 'tertiary',
    imgLeft: true
  }, 

]


  return (
    <Layout>
      <div className={styles.containerPageServicios}>
        <div className={styles.containerTitle}>
          <h2 className={styles.title}>Servicios de Podología en Alicante</h2>
          <p className={styles.description}>Bienvenido a nuestra página de servicios de podología en Alicante, donde tu comodidad y salud son nuestra prioridad. En Clínica Bipodal, nos enorgullece ofrecer una variedad de servicios podológicos especializados, diseñados para abordar tus necesidades individuales. Nuestro equipo de profesionales apasionados está dedicado a proporcionar soluciones efectivas y personalizadas para garantizar que cada paso que des sea cómodo y saludable.</p>
        </div>
        {data.map((item, index) => (
          <Ribbon key={index} variant={item.variant} imgLeft={item.imgLeft} buttonText={item.buttonText} imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title}>
            {item.children} 
          </Ribbon>
        ))}
        <h2>Servicios Especializados de Podología en Alicante</h2>
        <h3>biomecánica y estudio de la pisada</h3>
        <p>Nuestra completa exploración biomecánica va más allá de analizar simplemente la marcha y la postura. Realizamos un estudio minucioso del sistema musculo-esquelético, evaluamos la dinámica del gesto deportivo y examinamos la pisada. Esta evaluación detallada nos permite identificar desequilibrios y anomalías, proporcionando una base sólida para tratamientos personalizados que aborden las raíces de las molestias y mejoren la salud de tus pies.</p>
        <button>Más Informacion</button>

        <h2>Ortesis Plantar</h2>
        <p>Las ortesis plantares que ofrecemos no son solo plantillas; son soluciones a medida para tus pies. Desde la corrección de problemas biomecánicos hasta el alivio de molestias específicas, nuestras ortesis son diseñadas para adaptarse a la anatomía única de tus pies. Al proporcionar soporte personalizado, contribuyen no solo a mejorar la comodidad, sino también a abordar problemas a largo plazo, brindando una solución integral para tus necesidades podológicas.</p>
        <button>Más Informacion</button>

        <h2>Quiropodia</h2>
        <p>Nuestro servicio de quiropodia va más allá del cuidado básico de las uñas. Realizamos tratamientos dermatológicos especializados, abordando afecciones de la piel y uñas. Desde el corte y fresado de uñas hasta la eliminación de durezas, cada sesión de quiropodia está diseñada para mantener la salud óptima de tus pies, combinando cuidado estético y terapéutico.</p>
        <button>Más Informacion</button>

        <h2>Papiloma plantar</h2>
        <p>La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.</p>
        <button>Más Informacion</button>
      </div>
    </Layout>
  );

}
