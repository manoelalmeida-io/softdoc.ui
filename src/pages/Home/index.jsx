import React, { useEffect, useState } from 'react';
import Document from './components/Document';
import documentService from '../../service/DocumentService';

function Home() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    documentService.listAll({
      orderBy: [{ field: 'lastUpdatedDate', direction: 'desc' }],
    }).then((res) => {
      setDocuments(res.data.content);
    });
  }, []);

  return (
    <div style={{ padding: 50 }}>
      {documents.map((item) => (<Document key={item.id} document={item} />))}
    </div>
  );
}

export default Home;
