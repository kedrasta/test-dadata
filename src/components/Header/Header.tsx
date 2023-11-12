import { SvgSelector } from "../../utils/SvgSelector/SvgSelector";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <SvgSelector name="logo" />
        <h1>Wrench CRM</h1>
      </div>
      <div className={styles.user}>
        <SvgSelector name="person" />
        <span> Имя Фамилия</span>
      </div>
    </header>
  );
};
