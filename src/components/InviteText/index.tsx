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
          {moment(CONSTANT.date.dateISO).format('YYYY년 MM월 DD일')}, 토요일
          오후 6시
          {'\n'}
          계산CN웨딩홀 2층 베르테홀
          {'\n'}
          <span>
            On our wedding day, a new life begins. We'll share everything with
            each other.
            {'\n'}
            Celebrate with us as we begin a lifetime of love
          </span>
        </div>
        <div className={styles.title}>결혼합니다.</div>
        <div className={styles.desc}>
          평생 함께
          <br />
          같은 식탁에 앉을 사람을 만났습니다.
          <br />
          그래서 결혼합니다.
          <br />
          <br />
          소망이 축복 속에서
          <br />
          기쁨으로 이루어지는 날,
          <br />
          저희 두 사람이 하나가 됩니다.
          <br />
          <br />
          뜻깊은 이 날,
          <br />
          소중한 분들과 기쁨을 나누고자 하오니
          <br />
          귀한 걸음 하시어
          <br />
          따뜻하게 축복해 주시면 감사하겠습니다.
        </div>
        <div className={styles.desc}>
          <div>
            <div>
              {CONSTANT.groomDad.name}
              <br />
              {CONSTANT.groomMom.name}
            </div>
            <span>의 장남 {CONSTANT.groom.name}</span>
          </div>
          <div>
            <div>
              {CONSTANT.brideDad.name}
              <br />
              {CONSTANT.brideMom.name}
            </div>
            <span>의 차녀 {CONSTANT.bride.name}</span>
          </div>
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
