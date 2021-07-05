import Head from 'next/head';

export interface IMeta {
  title: string;
  desc: string;
}

export default function Meta({ title, desc }: IMeta) {
  return (
    <Head>
      <title>Tseengy | {title}</title>
      <meta name="desc" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
