import { useRef, useState } from 'react';
import { Wedding } from '../../assets';
import styles from './style.module.scss';
import { CONSTANT } from '../../util';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const images: string[] = [
  Wedding.photo1,
  Wedding.photo2,
  Wedding.photo3,
  Wedding.photo4,
  Wedding.photo5,
  Wedding.photo6,
  Wedding.photo7,
  Wedding.photo8,
  Wedding.photo9,
  Wedding.photo10,
  Wedding.photo11,
  Wedding.photo12,
  Wedding.photo13,
  Wedding.photo14,
  Wedding.photo15,
  Wedding.photo16,
  Wedding.photo17,
  Wedding.photo18,
  Wedding.photo19,
  Wedding.photo20
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <>
      <div className={styles.container} id={CONSTANT.ELEMENT_ID.GALLERY}>
        <div className={styles.title}>GALLERY</div>
        <div className={styles.photo}>
          <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView="auto"
            threshold={10}
            centeredSlides={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.slideTo(currentIndex, 0);
            }}
            loop
            onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className={styles.modalImg}>
                <img src={item} alt={`확대 사진 ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.listContainer}>
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                swiperRef.current?.slideTo(index, 0);
              }}
            >
              <img src={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
