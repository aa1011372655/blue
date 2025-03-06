import React from 'react';

import styles from './index.module.less';

const ProduceBeliefs: React.FC = () => {
  return (
    <div className={styles.wrapper5}>
      <div className={styles.beliefContainer}>
        <div className={styles.beliefHeader}>
          <span className={styles.beliefTitle}>WHAT WE BELIEVE</span>
          <span className={styles.beliefDescription}>
            We believe in produce. Tasty produce. Produce like:
          </span>
        </div>
        <ul className={styles.produceList}>
          <li className={styles.produceItem}>
            Apples. Oranges. Limes. Lemons.Guavas.Carrots. Cucumbers. Jicamas.
            CauliflowersBrussels sprouts. Shallots. Japanese eggplants.
            Asparagus. Artichokes-Jerusalemartichokes, too. Radishes. Broccoli.
            Baby broccoli. Broccolini. Bok choy. Scallions.Ginger. Cherries.
            Raspberries. Cilantro. Parsley. Dill.
          </li>
        </ul>
        <span className={styles.reminderText}>What are we forgetting?</span>
        <ol className={styles.additionalItems}>
          <li className={styles.produceItem}>
            Oh! Onions. Yams. Avocados, Lettuce. Aruqula (to
            some,&quot;rocket&quot;). Persian cucumbers,in addition to
            aforementioned &quot;normal&quot; cucumbers. Artichokes. Zucchinis.
            Pumpkins.Squash (what some cultures call pumpkins),Sweet potatoes
            and potato-potatoesJackfruit. Monk fruit, Fruit of the Loom., Fruits
            of our labor (this websitel.,SorrelPineapple. Mango. Gooseberries.
            Blackberries. Tomatoes. Heirloom tomatoes. Beets.Chives. Corn.
            Endive. Escarole,which,we swear, we&apos;re vendors of organic
            produce,but if you asked us to describe what escaroles are...
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProduceBeliefs;
