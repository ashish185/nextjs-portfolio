'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Coding',
    description: 'Working on web development projects'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Problem Solving',
    description: 'Tackling complex technical challenges'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    title: 'Team Collaboration',
    description: 'Working with cross-functional teams'
  }
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