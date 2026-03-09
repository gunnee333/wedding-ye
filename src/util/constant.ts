interface IPergson {
  name: string;
  bank?: string;
  account?: string;
  kakaoPay?: string;
}

const constants = {
  ELEMENT_ID: {
    HOME: 'home',
    GALLERY: 'gallery',
    LOCATION: 'location',
    GUEST_BOOK: 'guestBook',
    ACCOUNT: 'account',
    CALENDAR: 'calendar'
  },
  date: {
    dateISO: '2026-05-16T18:00:00+09:00'
  },
  place: {
    address: '인천 계양구 경명대로 1108',
    hallname: 'CN웨딩홀 계산점',
    tel: '032-546-0070',
    naver: 'https://map.naver.com/p/entry/place/12813804?c=17.00,0,0,0,dh',
    kakao:
      'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C440342%2C1123182&rt1=&rt2=CN%EC%B2%9C%EB%85%84%EC%9B%A8%EB%94%A9%ED%99%80+%EC%A3%BC%EC%B0%A8%EC%9E%A5&rtIds=%2C1752124685&rtTypes=%2CPLACE',
    lat: 37.50634759752773,
    lng: 126.75423564403523
  },
  groom: {
    name: '서동원',
    bank: '신한은행',
    account: '110-365755096',
    tel: '01084484346'
  } as IPergson,
  groomDad: {
    name: '서경석',
    bank: '우리은행',
    account: '1002-445-937472',
    tel: '01076610247'
  } as IPergson,
  groomMom: {
    name: '이영숙',
    bank: '농협',
    account: '130049-52-132810',
    tel: '01083394346'
  } as IPergson,
  bride: {
    name: '김예은',
    bank: 'IBK기업은행',
    account: '23311120501017',
    tel: '01051031952'
  } as IPergson,
  brideDad: {
    name: '김정식',
    bank: '국민은행',
    account: '816-240204-585',
    tel: '01037415730'
  } as IPergson,
  brideMom: {
    name: '박은희',
    bank: '국민은행',
    account: '720501-01-100520',
    tel: '01063241952'
  } as IPergson
};

export default constants;
