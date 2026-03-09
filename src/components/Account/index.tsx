import { useState } from 'react';
import { Images, Svgs } from '../../assets';
import styles from './style.module.scss';
import { CONSTANT } from '../../util';

interface IItem {
  title: string;
  name: string;
  bank?: string;
  account?: string;
  kakaoPay?: string;
}
const list1: IItem[] = [
  { ...CONSTANT.groom, title: '신랑' },
  { ...CONSTANT.groomDad, title: '아버지' },
  { ...CONSTANT.groomMom, title: '어머니' }
];
const list2: IItem[] = [
  { ...CONSTANT.bride, title: '신부' },
  { ...CONSTANT.brideDad, title: '아버지' },
  { ...CONSTANT.brideMom, title: '어머니' }
];

async function copyText(text: string) {
  await window.navigator?.clipboard?.writeText(text);
  alert('계좌번호를 복사했습니다.');
}

export default function Component() {
  const [isToggleOpen1, setIsToggleOpen1] = useState(false);
  const [isToggleOpen2, setIsToggleOpen2] = useState(false);

  return (
    <>
      <div className={styles.container} id={CONSTANT.ELEMENT_ID.ACCOUNT}>
        <div className={styles.title}>마음 전하실 곳</div>
        <div
          className={[
            styles.toggle,
            isToggleOpen1 ? styles.active : undefined
          ].join(' ')}
        >
          <div onClick={() => setIsToggleOpen1((prev) => !prev)}>
            <span></span>
            <span>신랑측</span>
            <Svgs.arrow />
          </div>
          <div className={styles.toggleDiv}>
            {list1
              .filter((item) => !!item.account && !!item.bank)
              .map((item) => (
                <ToggleItem item={item} key={item.title} />
              ))}
          </div>
        </div>
        <div
          className={[
            styles.toggle,
            isToggleOpen2 ? styles.active : undefined
          ].join(' ')}
        >
          <div onClick={() => setIsToggleOpen2((prev) => !prev)}>
            <span></span>
            <span>신부측</span>
            <Svgs.arrow />
          </div>
          <div className={styles.toggleDiv}>
            {list2
              .filter((item) => !!item.account && !!item.bank)
              .map((item) => (
                <ToggleItem item={item} key={item.title} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ToggleItem({ item }: { item: IItem }) {
  return (
    <div key={item.title} className={styles.toggleItem}>
      <div>
        <div>
          {item.title} <b>{item.name}</b>
        </div>
        <div>
          {item.bank} {item.account}
          <button
            type="button"
            className={styles.copyBtn}
            onClick={() => copyText(`${item.bank} ${item.account}`)}
          >
            <Svgs.copy />
          </button>
        </div>
      </div>
      <div>
        {item.kakaoPay ? (
          <button
            type="button"
            className={styles.kakaoBtn}
            onClick={() => window.open(item.kakaoPay)}
          >
            <img src={Images.kakaopay} alt="카카오페이" />
          </button>
        ) : undefined}
      </div>
    </div>
  );
}
