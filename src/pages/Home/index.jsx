import React, { useEffect, useState } from 'react';

import Document from './components/Document';
import documentService from '../../service/DocumentService';

import styles from './Home.module.css';
import Template from './components/Template';

function Home() {
  const [documents, setDocuments] = useState([]);

  const templates = [
    {
      id: 1,
      name: 'Blank document',
    },
  ];

  useEffect(() => {
    documentService.listAll({
      orderBy: [{ field: 'lastUpdatedDate', direction: 'desc' }],
    }).then((res) => {
      setDocuments(res.data.content);
    });
  }, []);

  return (
    <div>
      <div className={`${styles.templates} ${styles.container}`}>
        <span className={styles.title}>Create</span>
        <div style={{ display: 'flex', margin: '25px 0 0 0' }}>
          {templates.map((item) => (<Template key={item.id} template={item} />))}
        </div>
      </div>
      <div className={styles.container}>
        {documents.map((item) => (<Document key={item.id} document={item} />))}
      </div>
    </div>
  );
}

export default Home;
