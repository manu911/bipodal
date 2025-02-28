"use client";
import styles from "./acordeon.module.css";
import React from "react";
import Image from "next/image";
export interface AcordeonItemProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  key: number;
}

export interface AcordeonProps {
  data: AcordeonItemProps[];
}

export default function Acordeon(props: AcordeonProps) {
  return (
    <div className={styles.acordeonContainer}>
      {props.data.map((el) => {
        return (
          <div className={styles.imageSlot} key={el.key}>
            <Image className={styles.image} src={el.imgSrc} fill/>
            <span className={styles.title}>{el.title}</span>
            <p className={styles.description}>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
}
