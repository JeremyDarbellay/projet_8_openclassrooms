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
              <h3 id={`tab-${id}-${index}`} key={`tab-${id}-${index}`} className={styles.active}>
              <button onClick={() => handleTabClick(index)}>
                { tab.title }
            </button>
              </h3>
            : 
            <h3 id={`tab-${id}-${index}`} key={`tab-${id}-${index}`}>
            <button onClick={() => handleTabClick(index)}>
              { tab.title }
              </button>
            </h3>
          ))}
        </div>
        <div className={styles.contents}>
          {tabsContent.map((tab, index) => (
            index == tabIndex ?
            <p
              aria-labelledby={`tab-${id}-${index}`}
              className={`${styles.content}`}
              key={`tabcontent-${id}-${index}`}
            >
              { tab.content }
            </p>
            : <p
              aria-labelledby={`tab-${id}-${index}`}
              className={`${styles.content} ${styles.disabled}`}
              key={`tab-${id}-${index}`}
            >
              { tab.content }
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
