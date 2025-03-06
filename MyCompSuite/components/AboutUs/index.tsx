import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const AboutUs: React.FC = () => {
  const onBrowseOurShopClick = () => {};

  return (
    <div className={styles.wrapper3}>
      <div className={styles.aboutContainer}>
        <span className={styles.aboutTitle}>
          We&apos;re farmers,purveyors, and eaters of
        </span>
        <span className={styles.aboutDescription}>organically grown food.</span>
        <Button onClick={onBrowseOurShopClick} className={styles.browseButton}>
          Browse our shop
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
