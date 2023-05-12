import styles from "./Tabs.module.css";
import { useState, useId } from "react";

export default function Tabs({ tabsContent }) {

  const [tabIndex, setTabsIndex] = useState(0);
  const id = useId();

  function handleTabClick(index) {
    setTabsIndex(index);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titles}>
          {tabsContent.map((tab, index) => (
            index == tabIndex ?
            <button onClick={() => handleTabClick(index)} className={styles.active}>
              <h3 id={`tab-${id}-${index}`} key={`tab-${id}-${index}`}>
                { tab.title }
              </h3>
            </button>
            : <button onClick={() => handleTabClick(index)}>
            <h3 id={`tab-${id}-${index}`} key={`tab-${id}-${index}`}>
              { tab.title }
            </h3>
          </button>
          ))}
        </div>
        <div className={styles.contents}>
          {tabsContent.map((tab, index) => (
            index == tabIndex ?
            <p
              aria-labelledby={`tab-${id}-${index}`}
              className={`${styles.content}`}
            >
              { tab.content }
            </p>
            : <p
              aria-labelledby={`tab-${id}-${index}`}
              className={`${styles.content} ${styles.disabled}`}
            >
              { tab.content }
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
