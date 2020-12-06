import Head from 'next/head';
import styles from '../styles/Grid.module.css';

export default function Grid() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Showcase</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GRID</h1>
      </main>
    </div>
  );
}
