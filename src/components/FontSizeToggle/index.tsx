import { Images } from '../../assets';
import { useFontSize } from '../../context/FontSizeContext';
import styles from './style.module.scss';

export default function Component() {
  const { mode, setSmall, setLarge } = useFontSize();

  function toggle() {
    if (mode === 'large') {
      setSmall();
    } else {
      setLarge();
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.fontToggle}>
        <img src={Images.search} alt="확대" />
        <button className={styles.fontBtn} onClick={toggle} type="button">
          글씨 {mode === 'small' ? '크게' : '작게'} 보기
        </button>
      </div>
    </div>
  );
}
