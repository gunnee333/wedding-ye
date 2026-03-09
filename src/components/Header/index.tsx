import { Wedding } from '../../assets';
import { CONSTANT } from '../../util';
import styles from './style.module.scss';

export default function Component() {
  return (
    <div className={styles.container} id={CONSTANT.ELEMENT_ID.HOME}>
      <img src={Wedding.main} alt="" />
      <div className={styles.bottomText}>
        <div className={styles.en}>
          a<br />
          celebration
          <br />
          of our Love
        </div>
      </div>
    </div>
  );
}
