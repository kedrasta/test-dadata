import { menuItem } from "./menuItem";
import { Items } from "./Items";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.main}>
      <p>Меню</p>
      {menuItem.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </nav>
  );
};
