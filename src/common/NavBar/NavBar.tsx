"use client"
import styles from "./navBar.module.css";
import Link from '@mui/material/Link'

export default function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navBarGroup}  aria-label="Menu de navegacion">
         <Link className={styles.link} href="/" underline="none"  sx={{textTransform: 'none'}}>Bienvenido/a</Link>
         <Link className={styles.link} href="/Servicios" underline="none" sx={{textTransform: 'none'}}>Servicios</Link>
         <Link className={styles.link} href="/QuienesSomos" underline="none" sx={{textTransform: 'none'}}>¿Quienes somos?</Link>
         <Link className={styles.link} href="/Contacto" underline="none" sx={{textTransform: 'none'}}>Contacto</Link>
        
      </div>
    </div>
  );
}
