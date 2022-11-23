import moment from 'moment';
import StripTags from 'striptags';

import dateFns from 'Utils/DateFns';

export function getTheDate(timestamp, format) {
  const time = timestamp * 1000;
  const formatDate = format || 'MM-DD-YYYY';

  return dateFns(time).format(formatDate);
}

export function convertDateToTimeStamp(date, format) {
  const formatDate = format || 'YYYY-MM-DD';

  return dateFns(date, formatDate).unix();
}

export function getDomainName() {
  const hostArray = window.location.hostname.split('.').reverse();
  const host = `${hostArray[1]}.${hostArray[0]}`;

  return host;
}

export function setCookie(cname, cvalue, exdays) {
  let d;

  if (typeof exdays === 'number') {
    d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  } else if (exdays) {
    d = exdays;
  } else {
    d = new Date();
  }

  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/;domain=${getDomainName()}`;
}

export function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      if (name === 'std=' && sessionStorage.getItem('std')) {
        return sessionStorage.getItem('std');
      }

      return c.substring(name.length, c.length);
    }
  }

  return null;
}

export const reducerHelper = (s, a) => {
  if (typeof a === 'function') return a(s);

  return { ...s, ...a };
};

export const htmlDecode = (input) => {
  const e = document.createElement('textarea');
  e.innerHTML = input;

  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

export const newTab = (href) => {
  const a = document.createElement('a');
  a.href = href;
  a.setAttribute('target', '_blank');
  a.click();
};

export const formatDate = (d, formatType = false) => {
  let date = d;

  if (!d) return null;

  date = moment(d);

  if (formatType) return date.format(formatType);

  return date.format('YYYY/MM/DD HH:mm:ss');
};

export const snakeCase = (string) => {
  return string
    .toLowerCase()
    .replace(/[^\p{sc=Han}\w+]/gu, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('-');
};

export const removeEmoji = (text) => {
  return text.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    '',
  );
};

export const removeSymbols = (text) => {
  return text.replace(/[^\w\s\p{sc=Han}^-]/giu, '');
};

export const stripTags = (text) => {
  return StripTags(text);
};

export const convertStringOnly = (text) => {
  return snakeCase(removeSymbols(removeEmoji(stripTags(text))));
};

export const numbersOnly = (e) => {
  return e.target.value.replace(/[^0-9]/gi, '');
};

export const convertImageUrl = (image) => `data:image/jpeg;base64,${image}`;
