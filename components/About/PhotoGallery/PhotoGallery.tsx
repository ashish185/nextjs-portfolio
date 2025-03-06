'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

const photos = [
  {
    id: 1,
    url: 'nagarro.png',
    title: 'Nagarro',
    description: 'Currently working'
  },
  {
    id: 2,
    url: 'soprasteria.png',
    title: 'Sopra Steria',
    description: 'Spent 2.5 years'
  },
];

export function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainPhoto}>
        <Image
          src={photos[activePhoto].url}
          alt={photos[activePhoto].title}
          fill
          className={styles.image}
        />
        <div className={styles.photoInfo}>
          <h3>{photos[activePhoto].title}</h3>
          <p>{photos[activePhoto].description}</p>
        </div>
      </div>
      <div className={styles.thumbnails}>
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            className={`${styles.thumbnail} ${index === activePhoto ? styles.active : ''}`}
            onClick={() => setActivePhoto(index)}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className={styles.image}
            />
          </button>
        ))}
      </div>
    </div>
  );
}