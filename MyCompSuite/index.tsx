import React from 'react';
import AboutUs from './components/AboutUs';
import HeaderMenu from './components/HeaderMenu';
import ImageWithDescription from './components/ImageWithDescription';
import ProduceBeliefs from './components/ProduceBeliefs';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderMenu />
      <AboutUs />
      <div className={styles.containerSection}>
        <div className={styles.imageWrapper}>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/43db10f4-1459-4b4e-a453-24e89ffea5e0.png"
            className={styles.imageDisplay}
          />
        </div>
        <ImageWithDescription />
      </div>
      <ProduceBeliefs />
    </div>
  );
};

export default MyPageComponent;
