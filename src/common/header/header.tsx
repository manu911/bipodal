'use client'
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { LinearProgress } from "@mui/material";

export default function Header() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      console.log(scrollPercent);
      setProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Logo />
        <NavBar></NavBar>

      </div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
