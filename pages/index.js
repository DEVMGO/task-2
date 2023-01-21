// Components
import HeaderComPonent from "../components/header"; 
import BigCard from "../components/bigCard";
import SmallCard from "../components/smallCard";
// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeBody}>
      <div className={styles.container}>
        <HeaderComPonent />
        <div className={styles.cards}>
          <div className={styles.left_card}>
            <BigCard />
          </div>
          <div className={styles.right_card}>
            <SmallCard />
          </div>
        </div>
      </div>
    </div>
  );
}
