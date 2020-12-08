import Head from 'next/head';
import styles from '../styles/Grid.module.css';

export default function Grid() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Frontend Showcase</title>
      </Head>

      <h1 className={styles.title}>
        CSS Grid
      </h1>

      <main className={`${styles.main}`}>
        <a href="https://learncssgrid.com/#positioning-items-line-names"><h3>Resource</h3></a>
        <div className={`${styles["grid-container"]}`}>
          <div className={`${styles["grid-item"]} ${styles["grid-item-1"]} ${styles["navbar"]}`}>1</div>
          <div className={`${styles["grid-item"]} ${styles["card1"]}`}>2</div>
          <div className={`${styles["grid-item"]} ${styles["card2"]}`}>3</div>
          <div className={`${styles["grid-item"]} ${styles["card3"]}`}>4</div>
          <div className={`${styles["grid-item"]} ${styles["footer"]}`}>5</div>
        </div>

        <div className={`${styles.divider}`}></div>
        <p>Implicit grid</p>

        <div className={`${styles["grid-container--implicit"]}`}>
          <div className={`${styles["grid-item"]}`}>i1</div>
          <div className={`${styles["grid-item"]}`}>i2</div>
          <div className={`${styles["grid-item"]}`}>i3</div>
          <div className={`${styles["grid-item"]}`}>i4</div>
        </div>

        <div className={`${styles.divider}`}></div>
        <p>Implicitly named grid area</p>

        <div className={`${styles["grid-container--implicit-area"]}`}>
          <div className={`${styles["grid-item"]} ${styles["inner"]}`}>inner</div>
          <div className={`${styles["grid-item"]}`}>i2</div>
          <div className={`${styles["grid-item"]}`}>i3</div>
          <div className={`${styles["grid-item"]}`}>i4</div>
          <div className={`${styles["grid-item"]}`}>i1</div>
          <div className={`${styles["grid-item"]}`}>i2</div>
          <div className={`${styles["grid-item"]}`}>i3</div>
          <div className={`${styles["grid-item"]}`}>i4</div>
          <div className={`${styles["grid-item"]}`}>i4</div>
        </div>
      </main>
    </div>
  );
}
