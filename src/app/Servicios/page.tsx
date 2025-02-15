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
    imgSrc: '',
    imgAlt: '',
    buttonText: 'Pide tu cita a domicilio',
    children: `En Clínica Bipodal, llevamos la excelencia de nuestros servicios directamente a tu hogar. Entendemos que la comodidad es clave cuando se trata de cuidar de tu salud podológica, por lo que ofrecemos nuestros servicios de podología a domicilio. Ya sea que te encuentres con limitaciones de movilidad, prefieras la privacidad de tu espacio o simplemente busques la máxima conveniencia, nuestro equipo de podólogos expertos está listo para brindarte el mismo nivel de atención especializada que encontrarías en nuestra clínica. Agenda tu cita y permite que el cuidado podológico se adapte a tu estilo de vida, llevando la calidad de nuestros servicios directamente a tu puerta.`,
    variant: 'primary',
    imgLeft: false
  },
  {
    title: 'Biomecánica y estudio de la pisada',
    imgSrc: './biomecanica.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Nuestra completa exploración biomecánica va más allá de analizar simplemente la marcha y la postura. Realizamos un estudio minucioso del sistema musculo-esquelético, evaluamos la dinámica del gesto deportivo y examinamos la pisada. Esta evaluación detallada nos permite identificar desequilibrios y anomalías, proporcionando una base sólida para tratamientos personalizados que aborden las raíces de las molestias y mejoren la salud de tus pies.`,
    variant: 'secondary',
    imgLeft: true
  },
  {
    title: 'Ortesis Plantar',
    imgSrc: './ortesisPlantar.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Las ortesis plantares que ofrecemos no son solo plantillas; son soluciones a medida para tus pies. Desde la corrección de problemas biomecánicos hasta el alivio de molestias específicas, nuestras ortesis son diseñadas para adaptarse a la anatomía única de tus pies. Al proporcionar soporte personalizado, contribuyen no solo a mejorar la comodidad, sino también a abordar problemas a largo plazo, brindando una solución integral para tus necesidades podológicas.`,
    variant: 'tertiary',
    imgLeft: false
  }, 
  {
    title: 'Quiropodia',
    imgSrc: './quiropodia.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Nuestro servicio de quiropodia va más allá del cuidado básico de las uñas. Realizamos tratamientos dermatológicos especializados, abordando afecciones de la piel y uñas. Desde el corte y fresado de uñas hasta la eliminación de durezas, cada sesión de quiropodia está diseñada para mantener la salud óptima de tus pies, combinando cuidado estético y terapéutico.`,
    variant: 'secondary',
    imgLeft: true
  },
  {
    title: 'Papiloma plantar',
    imgSrc: './papilomaPlantar.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `La eliminación de verrugas plantares requiere más que un enfoque convencional. Utilizamos métodos especializados, como el tratamiento con ácido nítrico, asegurando la erradicación completa del papiloma y una curación efectiva de la herida. Nuestra atención no se limita solo a la eliminación; nos centramos en prevenir recurrencias y mantener la integridad de tu piel.`,
    variant: 'quaternary',
    imgLeft: false
  }, 
  {
    title: 'Onicomicosis',
    imgSrc: './onicomicosis.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Integrado dentro de nuestros servicios de quiropodia, el tratamiento de la onicomicosis es abordado con un enfoque integral. No solo aplicamos antimicóticos para tratar la infección, sino que también brindamos orientación sobre cuidados en el hogar y medidas preventivas para garantizar una recuperación duradera y prevenir futuras infecciones.`,
    variant: 'secondary',
    imgLeft: true
  },
  {
    title: 'Onicocriptosis o uña encarnada',
    imgSrc: './onicocriptosis.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Dentro de la quiropodia, ofrecemos tratamiento para la uña encarnada (espiculotomía) siempre que no sea necesario recurrir a la cirugía o anestesia. Nuestra atención se centra en aliviar el dolor y corregir la condición de forma no invasiva, garantizando una recuperación rápida y cómoda.`,
    variant: 'primary',
    imgLeft: false
  },  
  {
    title: 'Tratamiento y Cuidados de Pie Diabético',
    imgSrc: './pieDiabetico.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Nuestro enfoque en el cuidado de pacientes diabéticos va más allá de la quiropodia estándar. Ofrecemos una quiropodia completa junto con un tratamiento especializado para úlceras y heridas, priorizando la salud y el bienestar de aquellos con condiciones específicas, como la diabetes.`,
    variant: 'secondary',
    imgLeft: true
  },  
  {
    title: 'Ortoniquia',
    imgSrc: './ortoniquia.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `La ortesis ungueal que proporcionamos no solo corrige deformidades, sino que también se centra en la reeducación. Al abordar problemas específicos de las uñas, buscamos mejorar la función y la estética, ofreciendo soluciones personalizadas para mantener la salud de tus pies.`,
    variant: 'tertiary',
    imgLeft: false
  },  
  {
    title: 'Dermatomicosis',
    imgSrc: './dermatomicosis.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Nuestro tratamiento de hongos en la piel va más allá de una solución única. Adaptamos nuestras terapias a la naturaleza específica de la dermatofitosis, aplicando tratamientos personalizados para garantizar resultados efectivos y duraderos.`,
    variant: 'secondary',
    imgLeft: true
  },  
  {
    title: 'Podología física',
    imgSrc: './podologiaFisica.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Nuestro servicio de podología física va más allá de la aplicación de vendajes y técnicas en lesiones articulares y ligamentosas. Cada sesión se adapta a tus necesidades específicas, utilizando técnicas avanzadas para mejorar la función y reducir el dolor.`,
    variant: 'quaternary',
    imgLeft: false
  },  
  {
    title: 'Podología infantil',
    imgSrc: './podologiaInfantil.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `En nuestra clínica, nos preocupamos en atender las necesidades únicas de los niños y sus pies en crecimiento. Nuestro equipo de podólogos con amplia experiencia está aquí para proporcionar tratamientos suaves y efectivos, desde el cuidado básico hasta la solución de problemas específicos como deformidades o dolor.`,
    variant: 'secondary',
    imgLeft: true
  },  
  {
    title: 'Cirugía Ungueal',
    imgSrc: './cirugiaUngueal.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `La cirugía ungueal que realizamos aborda onicocriptosis y otras afecciones mediante cirugía menor. Adaptamos el procedimiento según el canal ungueal afectado, asegurando una solución duradera y una recuperación rápida.`,
    variant: 'tertiary',
    imgLeft: false
  },  
  {
    title: 'Infiltraciones podológicas',
    imgSrc: './infiltraciones.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `Ofrecemos el servicio de infiltraciones en Clínica Bipodal, una solución eficaz para disminuir la inflamación directamente en el punto de dolor. Nuestros podólogos especializados realizan infiltraciones de corticoides con precisión, brindando alivio a los pacientes que experimentan molestias persistentes. Descubre cómo este tratamiento puede ayudarte a recuperar la movilidad y disfrutar de una vida sin dolor.`,
    variant: 'secondary',
    imgLeft: true
  },  
  {
    title: 'Neuroma de Morton',
    imgSrc: './cirugiaUngueal.jpg',
    imgAlt: 'pies',
    buttonText: 'Más Información',
    children: `En Clínica Bipodal, abordamos el Neuroma de Morton con enfoques especializados para aliviar las molestias y mejorar la calidad de vida. Nuestros podólogos expertos realizan evaluaciones detalladas para comprender la naturaleza de este problema neurológico en los pies. Descubre cómo nuestro tratamiento personalizado puede proporcionar alivio y restaurar la comodidad en tus pasos.`,
    variant: 'primary',
    imgLeft: false
  },  
]


  return (
    <Layout>
      <div className={styles.containerPageServicios}>
        <div className={styles.containerTitle}>
          <h2 className={styles.title}>Servicios de Podología en Alicante</h2>
          <p className={styles.description}>Bienvenido a nuestra página de servicios de podología en Alicante, donde tu comodidad y salud son nuestra prioridad.</p>
          <p className={styles.description}> En Clínica Bipodal, nos enorgullece ofrecer una variedad de servicios podológicos especializados, diseñados para abordar tus necesidades individuales. </p>
          <p className={styles.description}>Nuestro equipo de profesionales apasionados está dedicado a proporcionar soluciones efectivas y personalizadas para garantizar que cada paso que des sea cómodo y saludable.</p>
        </div>
     
 
        {data.map((item, index) => (
          <Ribbon key={index} variant={item.variant} imgLeft={item.imgLeft} buttonText={item.buttonText} imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title}>
            {item.children} 
          </Ribbon>
        ))}
        
      </div>
    </Layout>
  );

}
