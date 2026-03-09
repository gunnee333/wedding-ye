import { Wedding, Svgs, Images } from '../../assets';
import { CONSTANT } from '../../util';
import styles from './style.module.scss';
import './wave.css';

export default function Component() {
  return (
    <div className={styles.container} id={CONSTANT.ELEMENT_ID.HOME}>
      <img src={Wedding.photo1} alt="" />
      <div className={styles.bottomAni}>
        <Svgs.waves />
      </div>
    </div>
  );
}
