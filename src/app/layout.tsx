import Head from 'next/head';
import styles from './layout.module.css';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={styles.default + ' ' + styles.html}>
            <Head>
                <title>Bipodal</title>
                <link rel="icon" href="/vercel.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className={styles.default}>{children}</body>
        </html>
    )
}