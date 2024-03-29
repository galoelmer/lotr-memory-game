import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles["orbit-spinner"]}>
        <div className={styles.orbit}></div>
        <div className={styles.orbit}></div>
        <div className={styles.orbit}></div>
      </div>
    </div>
  );
}
