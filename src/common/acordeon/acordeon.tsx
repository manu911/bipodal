"use client";
import styles from "./acordeon.module.css";
import React from "react";
import Image from "next/image";
export interface AcordeonProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

export default function Acordeon(props: AcordeonProps[]) {
  return (
    <div className={styles.acordeonContainer}>
      {props.data.map((el) => {
        return (
          <div className={styles.imageSlot}>
            <Image className={styles.image} src={el.imgSrc} fill/>
            <span>{el.title}</span>
            <p>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
}
