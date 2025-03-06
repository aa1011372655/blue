import React from 'react';

import styles from './index.module.less';

const ImageWithDescription: React.FC = () => {
  return (
    <div className={styles.wrapper4}>
      <div className={styles.imageContainer}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/425bb372-c6a9-4c59-94e4-b46d147850bb.png"
          className={styles.productImage}
        />
        <span className={styles.descriptionText}>
          Central California -The person who grew these was located in Central
          California and, er,hopefully very wellcompensated.
        </span>
      </div>
    </div>
  );
};

export default ImageWithDescription;
