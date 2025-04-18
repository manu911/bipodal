import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.default + " " + styles.html}>
      <Head>
        <title>Bipodal</title>
        <link rel="icon" href="/vercel.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src={
            `https://maps.googleapis.com/maps/api/js?key=` +
            process.env.GOOGLE_REVIEWS_API_KEY +
            `&loading=async&libraries=places&callback=initMap`
          }
        ></script>
      </Head>
      <body className={styles.default}>
        {children}
        <Image
          fill={true}
          objectFit="cover"
          className={styles.image}
          src={"lines.png"}
          alt={""}
        />
      </body>
    </html>
  );
}
