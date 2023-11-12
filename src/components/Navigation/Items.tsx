import { NavLink } from "react-router-dom";
import { SvgSelector } from "../../utils/SvgSelector/SvgSelector";
import { MenuItem } from "./menuItem";
import styles from "./Navigation.module.css";
import { useState } from "react";

interface MyComponentProps {
  item: MenuItem;
}

export const Items: React.FC<MyComponentProps> = ({ item }) => {
  const [activeChild, setActiveChild] = useState(false);

  const handleChange = () => {
    setActiveChild(!activeChild);
  };

  if (!item.child) {
    return (
      <div>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`
          }
          key={item.id}
        >
          <SvgSelector name={item.icon} />
          <span className={styles.name}>{item.name}</span>
        </NavLink>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div onClick={() => handleChange()} className={styles.link} key={item.id}>
        <SvgSelector name={item.icon} />
        <span className={styles.name}>{item.name}</span>
        {activeChild && <SvgSelector name={"arrow"} />}
      </div>
      {activeChild &&
        item.child.map((el) => {
          return (
            <NavLink to={el.path} className={styles.child} key={el.id}>
              <SvgSelector name={el.icon} />
              <span className={styles.name}>{el.name}</span>
            </NavLink>
          );
        })}
    </div>
  );
};
