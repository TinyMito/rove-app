import React, { useEffect, useState } from 'react';

export default function Suggestion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((photos) => {
        setData(photos);
      });
  }, []); 

  return (
    <div className='App'>
      <h1>Photo Gallery</h1>
      <div className='photo-list'>
        {data.slice(0, 8).map((photo) => (
          <div key={photo.id} className='photo-item'>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>ID: {photo.id}</p>
            <p>Title: {photo.title}</p>
            <a href={photo.url} target='_blank' rel='noopener noreferrer'>
              View Full Image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
