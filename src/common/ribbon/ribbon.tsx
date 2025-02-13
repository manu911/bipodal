"use client"
import styles from "./ribbon.module.css";
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface RibbonProps {
    title: string;
    buttonText?: string;
    imgSrc?: string;
    imgAlt?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    imgLeft?: boolean;
}

export default function Ribbon({ children, ...props }: RibbonProps & { children: ReactNode }) {
    props.imgSrc = props.imgSrc || '';
    props.imgAlt = props.imgAlt || '';
    props.variant = props.variant || 'primary';
    return (
        <div className={styles.ribbonContainer + ' ' + styles[props.variant]}>
            {!props.imgLeft &&
                <div className={styles.firstContainer}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.children}>{children}</p>
                    {props.buttonText &&
                        <button className={styles.button}> {props.buttonText}</button>
                    }
                </div>
            }
            {props.imgSrc &&

                <div className={styles.secondContainer}>
                    <div className={styles.imageContainer}>
                        <Image
                            fill={true}
                            className={styles.image}
                            src={props.imgSrc}
                            alt={props.imgAlt} />

                    </div>
                </div>
            }
            {props.imgLeft &&
                <div className={styles.firstContainer}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.children}>{children}</p>
                    {props.buttonText &&
                        <button className={styles.button}> {props.buttonText}</button>
                    }
                </div>
            }
        </div>
    );
}
