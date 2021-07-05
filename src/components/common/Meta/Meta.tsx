import Head from 'next/head';

export interface IMeta {
  title: string;
  desc: string;
}

export default function Meta({ title, desc }: IMeta) {
  return (
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" />
      <title>Tseengy | {title}</title>
      <meta name="desc" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
