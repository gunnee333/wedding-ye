import { useState } from 'react';
import { Wedding } from '../../assets';
import styles from './style.module.scss';
import { CONSTANT } from '../../util';
import { ImageModal } from '../Modal/ImageModal';

const images: string[] = [
  Wedding.photo1,
  Wedding.photo2,
  Wedding.photo21,
  Wedding.photo3,
  Wedding.photo4,
  Wedding.photo13,
  Wedding.photo6,
  Wedding.photo7,
  Wedding.photo8,
  Wedding.photo9,
  Wedding.photo10,
  Wedding.photo11,
  Wedding.photo12,
  Wedding.photo16,
  Wedding.photo17,
  Wedding.photo5,
  Wedding.photo14,
  Wedding.photo15,
  Wedding.photo18,
  Wedding.photo19,
  Wedding.photo20
];

const photos = images.map((item, index) => ({ url: item, index }));

export default function Component() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className={styles.container} id={CONSTANT.ELEMENT_ID.GALLERY}>
        <div className={styles.title}>GALLERY</div>
        <div className={styles.listContainer}>
          {photos.map((item) => (
            <div
              key={item.index}
              className={styles.photoItem}
              onClick={() => setOpenIndex(item.index)}
            >
              <img src={item.url} />
            </div>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <ImageModal
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
