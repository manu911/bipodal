"use client"
import styles from "./navBar.module.css";
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navBarGroup} aria-label="Menu de navegacion">
        <Link className={styles.link} href="/" underline="none" sx={{ textTransform: 'none' }}>Bienvenido/a</Link>
        <Link className={styles.link} href="/Servicios" underline="none" sx={{ textTransform: 'none' }}>Servicios</Link>
        <Link className={styles.link} href="/QuienesSomos" underline="none" sx={{ textTransform: 'none' }}>¿Quienes somos?</Link>
        <Link className={styles.link} href="/Contacto" underline="none" sx={{ textTransform: 'none' }}>Contacto</Link>

      </div>
      <div className={styles.burguerNavBarGroup}>
        <Button variant="contained" {...bindTrigger(popupState)}>
         <MenuIcon></MenuIcon>
        </Button>
        <Menu {...bindMenu(popupState)}
           
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
          <MenuItem onClick={popupState.close}><Link className={styles.link} href="/" underline="none" sx={{ textTransform: 'none' }}>Bienvenido/a</Link></MenuItem>
          <MenuItem  onClick={popupState.close}><Link className={styles.link} href="/Servicios" underline="none" sx={{ textTransform: 'none' }}>Servicios</Link></MenuItem>
          <MenuItem onClick={popupState.close}> <Link className={styles.link} href="/QuienesSomos" underline="none" sx={{ textTransform: 'none' }}>¿Quienes somos?</Link></MenuItem>
          <MenuItem onClick={popupState.close}> <Link className={styles.link} href="/Contacto" underline="none" sx={{ textTransform: 'none' }}>Contacto</Link>          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
