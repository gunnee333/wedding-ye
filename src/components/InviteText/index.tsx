import { useState } from 'react';
import styles from './style.module.scss';
import Modal from '../Modal';
import { Svgs } from '../../assets';
import { CONSTANT } from '../../util';
import moment from 'moment';

const telNumList: { title: string; name: string; tel?: string }[] = [
  { ...CONSTANT.groom, title: `🤵🏻\n신랑` },
  { ...CONSTANT.bride, title: `👰🏻‍♀️\n신부` },
  { ...CONSTANT.groomDad, title: '신랑 아버지' },
  { ...CONSTANT.brideDad, title: '신부 아버지' },
  { ...CONSTANT.groomMom, title: '신랑 어머니' },
  { ...CONSTANT.brideMom, title: '신부 어머니' }
];

export default function Component() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className={styles.container} id={CONSTANT.ELEMENT_ID.HOME}>
        <div className={styles.desc}>
          <p>우리들의 아름다운 시작,</p>
          <p>당신을 초대합니다.</p>
        </div>
        <div className={styles.title}>
          {CONSTANT.groom.name.slice(1, 3)} & {CONSTANT.bride.name.slice(1, 3)}
        </div>
        <div className={styles.desc}>
          <p>Wedding</p>
          <p>결혼합니다</p>
        </div>
        <div className={styles.date}>
          {moment(CONSTANT.date.dateISO).format('YYYY.MM.DD')}
        </div>
        <div>
          <button onClick={() => setIsModal(true)}>
            <Svgs.tel width={20} />
            연락하기
          </button>
        </div>
      </div>
      <Modal
        visible={isModal}
        isCenter={true}
        contentClassName={styles.modal}
        toWay="none"
        close={() => setIsModal(false)}
      >
        <div className={styles.list}>
          {telNumList.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.btnList}>
                <div className={styles.btn}>
                  <a href={`tel:${item.tel}`}>전화하기</a>
                </div>
                <div className={styles.btn}>
                  <a href={`sms:${item.tel}`}>문자보내기</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
