import moment from 'moment';
import { Images, Wedding } from '../../assets';
import { CONSTANT } from '../../util';
import styles from './style.module.scss';

export default function Component() {
  return (
    <div className={styles.container} id={CONSTANT.ELEMENT_ID.HOME}>
      <img src={Wedding.main} alt="" />
      <div className={styles.bottomText}>
        <div>
          서동원
          <br />
          김예은
        </div>
        <div>
          {moment(CONSTANT.date.dateISO).format(
            'YYYY년 MM월 DD일, 토요일 오후 6시'
          )}
          <br />
          계산CN웨딩홀 2층 베르테홀
        </div>
      </div>
      <div className={styles.background}>
        <img src={Images.mainBackground} alt="background" />
      </div>
      <div className={styles.background}>
        <img src={Images.effect} alt="flower" />
      </div>
    </div>
  );
}
