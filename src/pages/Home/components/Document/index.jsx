import React from 'react';
import PropTypes from 'prop-types';

import styles from './Document.module.css';
import documentIcon from '../../../../assets/images/document.svg';
import { dateDiff } from '../../../../utils/date/dateDiffUtils';

function Document({ document }) {
  function calculateTimePassed(lastUpdatedDateString) {
    const lastUpdatedDate = Date.parse(lastUpdatedDateString);
    const now = Date.now();

    try {
      const diff = dateDiff(lastUpdatedDate, now);
      return `at ${diff} ago`;
    } catch (e) {
      return '';
    }
  }

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
          <span className={styles.description}>
            {calculateTimePassed(document.lastUpdatedDate)}
          </span>
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
