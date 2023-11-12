import { ContentNews } from "./ContentNews";
import styles from "./News.module.css";

function News() {
  return (
    <div className={styles.main}>
      <h1>Новости</h1>
      <span>Обновление CRM до 1.2</span>
      <article>
        <ContentNews />
      </article>
    </div>
  );
}

export default News;
