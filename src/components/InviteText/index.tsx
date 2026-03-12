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
        <div className={styles.info}>
          <div>wedding invitation</div>
          <div>{moment(CONSTANT.date.dateISO).format('MM/DD')}</div>
        </div>
        <div className={styles.title}>Our Beginning</div>
        <div className={styles.desc}>
          평생 함께 같은 식탁에 앉아
          <br />
          소소한 일상을 나눌
          <br />
          사람을 만났습니다.
          <br />
          <br />
          서로에게 가장 따뜻한 사람이
          <br />
          되기로 약속하며
          <br />
          두 사람이 하나 되는 날,
          <br />
          <br />
          귀한 걸음으로 오셔서
          <br />
          따뜻한 축복으로
          <br />
          함께해 주시면 감사하겠습니다.
          <br />
        </div>
        <div className={styles.desc}>
          <div>
            <div>
              {CONSTANT.groomDad.name}
              <br />
              {CONSTANT.groomMom.name}
            </div>
            <span>
              의 장남 <b>{CONSTANT.groom.name}</b>
            </span>
          </div>
          <div>
            <div>
              {CONSTANT.brideDad.name}
              <br />
              {CONSTANT.brideMom.name}
            </div>
            <span>
              의 차녀 <b>{CONSTANT.bride.name}</b>
            </span>
          </div>
        </div>
        <div>
          <button onClick={() => setIsModal(true)}>
            <Svgs.tel width={14} />
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
                  <a href={`tel:${item.tel}`}>
                    <Svgs.tel width={14} /> 전화
                  </a>
                </div>
                <div className={styles.btn}>
                  <a href={`sms:${item.tel}`}>
                    <Svgs.sms /> 문자
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
