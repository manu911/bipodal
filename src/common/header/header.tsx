'use client'
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { LinearProgress } from "@mui/material";

export default function Header() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    console.log("asd");
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop;
      const docHeight = document.body.scrollHeight - document.body.offsetHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      console.log(scrollPercent);
      setProgress(scrollPercent);
    };
    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
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
