import React from 'react';
import Document from './components/Document';

function Home() {
  const documents = [
    {
      id: 1,
      title: 'Test 1',
      description: 'Test document number 1',
      content: 'This is the content',
      createdDate: '2023-02-21T12:48:28-03:00',
      lastUpdatedDate: '2023-02-21T13:35:32-03:00',
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'Test document number 2',
      content: 'This is the content',
      createdDate: '2023-02-25T15:27:14-03:00',
      lastUpdatedDate: '2023-02-25T15:27:14-03:00',
    },
  ];

  return (
    <div style={{ padding: 50 }}>
      {documents.map((item) => (<Document key={item.id} document={item} />))}
    </div>
  );
}

export default Home;
