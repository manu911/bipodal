"use client"
import styles from "./ribbon.module.css";
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface RibbonProps {
    title: string;
    buttonText: string;
    imgSrc: string;
    imgAlt: string;
    variant?: 'primary' | 'secondary';
    imgLeft?: boolean;
}

export default function Ribbon({ children, ...props }: RibbonProps & { children: ReactNode }) {

    return (
        <div className={styles.ribbonContainer + ' ' + (props.variant === 'secondary' ? styles.secondary : styles.primary)}>
            {!props.imgLeft &&
                <div className={styles.firstContainer}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.children}>{children}</p>
                    <button className={styles.button}> {props.buttonText}</button>
                </div>
            }
            <div className={styles.secondContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        fill={true}
                        className={styles.image}
                        src={props.imgSrc}
                        alt={props.imgAlt} />

                </div>
            </div>
            {props.imgLeft &&
                <div className={styles.firstContainer}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.children}>{children}</p>
                    <button className={styles.button}> {props.buttonText}</button>
                </div>
            }
        </div>
    );
}
