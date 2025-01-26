import Head from 'next/head';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <Head>
                <title>Bipodal</title>
                <link rel="icon" href="/vercel.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>{children}</body>
        </html>
    )
}