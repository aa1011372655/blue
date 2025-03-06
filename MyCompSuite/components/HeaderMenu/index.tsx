import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const HeaderMenu: React.FC = () => {
  const onBasketCountClick = () => {};

  return (
    <div className={styles.wrapper2}>
      <div className={styles.headerContainer}>
        <div className={styles.navigationBar}>
          <span className={styles.siteTitle}>World Peas</span>
        </div>
        <div className={styles.menuSection}>
          <span className={styles.shopLink}>Shop</span>
          <span className={styles.newstandLink}>Newstand</span>
          <span className={styles.aboutUsLink}>Who we are</span>
          <span className={styles.aboutUsLink}>My profile</span>
          <Button
            size="small"
            onClick={onBasketCountClick}
            className={styles.basketButton}
          >
            Basket (3)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
