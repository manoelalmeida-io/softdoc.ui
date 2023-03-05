import React from 'react';
import PropTypes from 'prop-types';

import styles from './Document.module.css';
import documentIcon from '../../../../assets/images/document.svg';

function Document({ document }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img src={documentIcon} alt="document" />
        </div>
        <div className={styles.title_container}>
          <span className={styles.title}>{document.title}</span>
          <span className={styles.description}>{document.description}</span>
        </div>
        <div className={styles.time_container}>
          <span className={styles.description}>at 2 minutes ago</span>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
}

Document.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    createdDate: PropTypes.string,
    lastUpdatedDate: PropTypes.string,
  }).isRequired,
};

export default Document;
