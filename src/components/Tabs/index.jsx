import styles from "./Tabs.module.css";
import { useState } from "react";

export default function Tabs({ tabsContent }) {

  const [tabIndex, setTabsIndex] = useState(0);

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
              <h3 tabIndex={index} id={`tab-${index}`} key={`tab-${index}`}>
                { tab.title }
              </h3>
            </button>
            : <button onClick={() => handleTabClick(index)}>
            <h3 tabIndex={index} id={`tab-${index}`} key={`tab-${index}`}>
              { tab.title }
            </h3>
          </button>
          ))}
        </div>
        <div className={styles.contents}>
          {tabsContent.map((tab, index) => (
            index == tabIndex ?
            <p
              aria-labelledby={`tab-${index}`}
              className={`${styles.content}`}
            >
              { tab.content }
            </p>
            : <p
              aria-labelledby={`tab-${index}`}
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
