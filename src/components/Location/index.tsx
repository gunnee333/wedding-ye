import { useEffect } from 'react';
import styles from './style.module.scss';
import { Images } from '../../assets';
import { CONSTANT } from '../../util';

let cnt = 0;

function kakaoMapLoad() {
  if (cnt > 0) {
    return;
  }
  try {
    // @ts-ignore
    new daum.roughmap.Lander({
      timestamp: '1771839159884',
      key: 'huxnxvce8ce',
      mapWidth: '440',
      mapHeight: '300'
    }).render();
    cnt++;
  } catch (error) {
    console.error('kakaoMapLoad error', error);
  }
}

function tmapLoad() {
  // 티맵 (앱 스킴 + 안내 페이지)
  const schemeUrl = `tmap://route?goalx=${CONSTANT.place.lng}&goaly=${
    CONSTANT.place.lat
  }&goalname=${encodeURIComponent(CONSTANT.place.hallname)}`;
  const fallbackUrl = `https://www.tmap.co.kr/tmap2/mobile/main.do`;

  const start = Date.now();
  window.location.href = schemeUrl;

  window.setTimeout(() => {
    // 스킴이 막히거나 앱 미설치면 대체 링크로
    if (Date.now() - start < 1500) window.location.href = fallbackUrl;
  }, 800);
}

async function copyText(text: string) {
  await window.navigator?.clipboard?.writeText(text);
  alert('주소복사 완료');
}

export default function Component() {
  useEffect(() => {
    kakaoMapLoad();
  }, []);

  return (
    <div className={styles.container} id={CONSTANT.ELEMENT_ID.LOCATION}>
      <div className={styles.title}>오시는 길</div>
      <div className={styles.desc}>
        {CONSTANT.place.address}
        <br />
        {CONSTANT.place.hallname}
      </div>

      <div className={styles.map}>
        <div
          id="daumRoughmapContainer1771839159884"
          className="root_daum_roughmap root_daum_roughmap_landing"
        ></div>
        <div className={styles.link}>
          <div onClick={() => window.open(CONSTANT.place.naver)}>
            <img src={Images.naverMap} alt="네이버지도" />
            <span>네이버지도</span>
          </div>
          <div onClick={() => window.open(CONSTANT.place.kakao)}>
            <img src={Images.kakaoNav} alt="카카오내비" />
            <span>카카오내비</span>
          </div>
          <div onClick={tmapLoad}>
            <img src={Images.tmap} alt="티맵" />
            <span>티맵</span>
          </div>
        </div>
        <img src={Images.map} className={styles.mapImg} alt="지도 약도" />
      </div>
      <div className={styles.load}>
        <table>
          <tbody>
            <tr>
              <th>
                <img src={Images.train} alt="지하철이미지" width={30} />
                지하철
              </th>
              <td>
                <div>
                  <span style={{ color: '#6f99d0' }}>인천지하철</span> 계산역
                  4번 출구
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <img src={Images.bus} alt="버스이미지" width={30} /> 버스
              </th>
              <td className={styles.bus}>
                <div className={styles.blue}>
                  - 간선 <span>24-1</span> <span>30</span> <span>79</span>{' '}
                  <span>80</span>
                </div>
                <div className={styles.blue}>
                  - 좌석 <span>111</span> <span>111B</span>
                </div>
                <div className={styles.green}>
                  - 일반 <span>81</span> <span>88</span>
                </div>
                <div className={styles.green}>
                  - 마을 <span>584-1</span> <span>588</span>
                </div>
                <div className={styles.red}>
                  - 광역 <span>1500</span> <span>9500</span>
                </div>
                <div className={styles.red}>
                  - 시외 <span>3000</span> <span>3030</span> <span>5000</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <img src={Images.car} alt="차이미지" width={30} /> 주차
              </th>
              <td>
                <b>2시간</b> 무료주차
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
