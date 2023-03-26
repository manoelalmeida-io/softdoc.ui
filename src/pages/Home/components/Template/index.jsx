import React from 'react';
import PropTypes from 'prop-types';

import styles from './Template.module.css';

function Template({ template }) {
  return (
    <div className={styles.container}>
      <div className={styles.document} />
      <span>{template.name}</span>
    </div>
  );
}

Template.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Template;
