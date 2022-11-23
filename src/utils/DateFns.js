import moment from 'moment';

const DateFns = (date = null) => {
  if (date && moment(date).isValid()) return moment(date);

  return moment();
};

export default DateFns;
